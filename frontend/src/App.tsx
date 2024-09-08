import React, { useState } from 'react';
import PlayerTable from './components/PlayerTable';
import PlayerDetail from './components/PlayerDetail';
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
  
    const handlePlayerSelect = (player: Player) => {
      console.log('Player selected:', player); // Log to verify click event
      setSelectedPlayer(player); // Directly set the selected player without reset
    };
  
    return (
      <div className="app">
        {/* Pass handlePlayerSelect to PlayerTable */}
        <PlayerTable onPlayerSelect={handlePlayerSelect} />
        {selectedPlayer && <PlayerDetail player={selectedPlayer} />}
      </div>
    );
  };
  
  export default App;