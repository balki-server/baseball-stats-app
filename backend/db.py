import psycopg2
from flask import Flask, jsonify, request
import json

def init_db():
    conn = psycopg2.connect(dbname="baseball_stats", user="barrybong", password="969696")
    cur = conn.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        player VARCHAR(100),
        hits INTEGER,
        age INTEGER,
        year INTEGER,
        rank INTEGER,
        bats VARCHAR(3)
    );''')

    conn.commit()
    cur.close()
    conn.close()

def get_player_from_db(player_id):
    conn = psycopg2.connect(dbname="baseball_stats", user="barrybong", password="969696")
    cur = conn.cursor()
    cur.execute("SELECT * FROM players WHERE id = %s", (player_id,))
    player = cur.fetchone()
    cur.close()
    conn.close()
    if player:
        # Convert the tuple to a dictionary
        player_dict = {
            'id': player[0],
            'Player': player[1],
            'Hits': player[2],
            'AgeThatYear': player[3],
            'Year': player[4],
            'Rank': player[5],
            'Bats': player[6]
        }

        # Return as a JSON response using Flask's jsonify function
        #return json.dumps(player_dict)
        return player_dict

def insert_player(player):
    conn = psycopg2.connect(dbname="baseball_stats", user="barrybong", password="969696")
    cur = conn.cursor()
    cur.execute('INSERT INTO players (id, player, hits, age, year, rank, bats) VALUES (%s, %s, %s, %s, %s, %s, %s)',
                (player['id'], player['Player'], player['Hits'], player['AgeThatYear'], player['Year'], player['Rank'], player['Bats']))
    conn.commit()
    print(f"Player {player['id']} inserted into the database")  # Debugging log    
    cur.close()
    conn.close()

def update_player(player_id, data):
    conn = psycopg2.connect(dbname="baseball_stats", user="barrybong", password="969696")
    cur = conn.cursor()
    cur.execute('UPDATE players SET player = %s, hits = %s, age = %s, year = %s, rank = %s, bats = %s WHERE id = %s',
                (data['Player'], data['Hits'], data['AgeThatYear'], data['Year'], data['Rank'], data['Bats'], player_id))
    conn.commit()
    cur.close()
    conn.close()
