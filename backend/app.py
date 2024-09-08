from numbers import Number
from flask_cors import CORS
from flask import Flask, jsonify, request
import requests
from db import init_db, get_player_from_db, update_player, insert_player
from models import Player
import psycopg2

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Initialize the database on first run
init_db()

# API endpoint to fetch player data (get from API or DB)
@app.route('/players', methods=['GET'])
def get_players():
    year = request.args.get('year')
    # Fetch data from external API
    response = requests.get('https://api.sampleapis.com/baseball/hitsSingleSeason')
    api_data = response.json()
    players = []

    for player in api_data:
        # Check if player is in the database
        playernum = int(player['id'])
        db_player = get_player_from_db(playernum)
        if db_player:
            players.append(db_player)
            #print(f"Player {player['Player']} inserted into players object")  # Debugging log  
        else:
            if player['Rank'] == "":
                # Calculate rank based on Hits compared to other players
                hits_in_year = [p['Hits'] for p in api_data if p['Year'] == player['Year']]
                player['Rank'] = sum(p['Hits'] > player['Hits'] for p in api_data if p['Year'] == player['Year'])
            #add_player()
            insert_player(player)
            players.append(player)
    print(f"Player {players}")
    return jsonify(players)

# API endpoint to update player data
@app.route('/players/<int:id>', methods=['PUT'])
def edit_player(id):
    data = request.json
    update_player(id, data)
    return jsonify({'status': 'Player updated'})

if __name__ == "__main__":
    app.run(debug=True)
