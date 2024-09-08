import React, { useState } from 'react';
import PlayerTable from './components/PlayerTable';
import PlayerDetail from './components/PlayerDetail';
import EditPlayer from './components/EditPlayer'; //
import './App.css';

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
   const App: React.FC = () => {
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    const [editingPlayer, setEditingPlayer] = useState<Player | null>(null); // New state for editing
  
    const handlePlayerSelect = (player: Player) => {
      setSelectedPlayer(player); // Select a player to show details
    };
  
    const handleEditPlayer = (player: Player) => {
      setEditingPlayer(player); // Select a player to edit
    };
  
    const handleSavePlayer = (updatedPlayer: Player) => {
      // Handle saving the updated player (this can include an API call)
      console.log('Saving player:', updatedPlayer);
      setEditingPlayer(null); // Close the edit form after saving
    };
  
    return (
      <div className="app">
        <PlayerTable onPlayerSelect={handlePlayerSelect} onEditPlayer={handleEditPlayer} />
        {selectedPlayer && <PlayerDetail player={selectedPlayer} />}
        {editingPlayer && (
          <EditPlayer player={editingPlayer} onSave={handleSavePlayer} />
        )}
      </div>
    );
  };
  
  export default App;
  