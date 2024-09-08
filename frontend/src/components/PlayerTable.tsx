import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerTable = ({ onPlayerSelect }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/players').then((response) => {
      setPlayers(response.data);
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
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player.id} className={index % 2 === 0 ? 'even' : 'odd'} onClick={() => onPlayerSelect(player)}>
            <td>{player.player}</td>
            <td>{player.hits}</td>
            <td>{player.age}</td>
            <td>{player.year}</td>
            <td>{player.rank}</td>
            <td>{player.bats}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
