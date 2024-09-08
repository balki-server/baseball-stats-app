import psycopg2

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
    return player

def insert_player(player):
    conn = psycopg2.connect(dbname="baseball_stats", user="barrybong", password="969696")
    cur = conn.cursor()
    cur.execute('INSERT INTO players (id, player, hits, age, year, rank, bats) VALUES (%s, %s, %s, %s, %s, %s, %s)',
                (player['id'], player['player'], player['hits'], player['age'], player['year'], player['rank'], player['bats']))
    conn.commit()
    cur.close()
    conn.close()

def update_player(player_id, data):
    conn = psycopg2.connect(dbname="baseball_stats", user="barrybong", password="969696")
    cur = conn.cursor()
    cur.execute('UPDATE players SET player = %s, hits = %s, age = %s, year = %s, rank = %s, bats = %s WHERE id = %s',
                (data['player'], data['hits'], data['age'], data['year'], data['rank'], data['bats'], player_id))
    conn.commit()
    cur.close()
    conn.close()
