import React, { useState, useEffect } from 'react';
import PlayerTable from './components/PlayerTable';
import PlayerDetail from './components/PlayerDetail';
import EditPlayer from './components/EditPlayer';
import axios from 'axios';
import './App.css';

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

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);

  // Fetch the list of players when the component mounts
  const fetchPlayers = () => {
    axios.get('http://localhost:5000/players')
      .then((response) => {
        console.log (response.data)
        setPlayers(response.data);  // Set the player list state
      })
      .catch((error) => {
        console.error('Error fetching players:', error);
      });
  };

  useEffect(() => {
    fetchPlayers();  // Fetch players when component mounts
  }, []);

  const handlePlayerSelect = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleEditPlayer = (player: Player) => {
    setEditingPlayer(player);
  };

  const handleSavePlayer = (updatedPlayer: Player) => {
    console.log('Saving player:', updatedPlayer);
    
    // After saving the player, refetch the player list
    axios.put(`http://localhost:5000/players/${updatedPlayer.id}`, updatedPlayer)
      .then(() => {
        setEditingPlayer(null); // Close the edit form after saving
        fetchPlayers();  // Refetch the updated list of players
      })
      .catch((error) => {
        console.error('Error saving player:', error);
      });
  };

  return (
    <div className="app">
      <PlayerTable players={players} onPlayerSelect={handlePlayerSelect} onEditPlayer={handleEditPlayer} />
      {selectedPlayer && <PlayerDetail player={selectedPlayer} />}
      {editingPlayer && <EditPlayer player={editingPlayer} onSave={handleSavePlayer} />}
    </div>
  );
};

export default App;
