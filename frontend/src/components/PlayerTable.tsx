import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Player type
interface Player {
  id: number;
  Player: string;
  Hits: number;
  AgeThatYear: number;
  Year: number;
  Rank: number;
  Bats: string;
}

// Define the props type
interface PlayerTableProps {
  onPlayerSelect: (player: Player) => void;
  onEditPlayer: (player: Player) => void;  // New prop for editing
}

const PlayerTable: React.FC<PlayerTableProps> = ({ onPlayerSelect, onEditPlayer }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/players')
      .then((response) => {
        console.log('Player data received:', response.data);
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching player data:', error);
      });
  }, []);

  return (
    <table className="player-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Hits</th>
          <th>Age</th>
          <th>Year</th>
          <th>Rank</th>
          <th>Bats</th>
          <th>Edit</th> {/* New column for Edit button */}
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr
            key={player.id}
            className={index % 2 === 0 ? 'even' : 'odd'}
            onClick={() => onPlayerSelect(player)}
          >
            <td>{player.Player}</td>
            <td>{player.Hits}</td>
            <td>{player.AgeThatYear}</td>
            <td>{player.Year}</td>
            <td>{player.Rank}</td>
            <td>{player.Bats}</td>
            <td>
              <button onClick={(e) => { e.stopPropagation(); onEditPlayer(player); }}>Edit</button>
              {/* Edit button triggers onEditPlayer */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;