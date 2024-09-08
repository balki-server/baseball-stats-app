import React, { useState, useEffect } from 'react';
import PlayerTable from './components/PlayerTable';
import PlayerDetail from './components/PlayerDetail';
import './App.css';

const App: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div className="app">
      <PlayerTable onPlayerSelect={setSelectedPlayer} />
      {selectedPlayer && <PlayerDetail player={selectedPlayer} />}
    </div>
  );
};

export default App;