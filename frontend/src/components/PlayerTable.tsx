import React from 'react';

// Define the Player interface
interface Player {
  id: number;
  Player: string;
  Hits: number;
  AgeThatYear: number;
  Year: number;
  Rank: number;
  Bats: string;
}

interface PlayerTableProps {
  players: Player[];  // Accept players as a prop
  onPlayerSelect: (player: Player) => void;
  onEditPlayer: (player: Player) => void;
}

const PlayerTable: React.FC<PlayerTableProps> = ({ players, onPlayerSelect, onEditPlayer }) => {
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
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player.id} onClick={() => onPlayerSelect(player)}>
            <td>{player.Player}</td>
            <td>{player.Hits}</td>
            <td>{player.AgeThatYear}</td>
            <td>{player.Year}</td>
            <td>{player.Rank}</td>
            <td>{player.Bats}</td>
            <td>
              <button onClick={(e) => { e.stopPropagation(); onEditPlayer(player); }}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
