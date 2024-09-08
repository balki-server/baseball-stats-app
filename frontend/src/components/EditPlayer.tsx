import React, { useState } from 'react';
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
interface EditPlayerProps {
  player: Player;
  onSave: () => void;
}

const EditPlayer: React.FC<EditPlayerProps> = ({ player, onSave }) => {
  const [formData, setFormData] = useState<Player>({ ...player });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.put(`/players/${player.id}`, formData).then(() => {
      onSave();
    });
  };

  return (
    <div className="edit-player">
      <input name="player" value={formData.Player} onChange={handleChange} />
      <input name="hits" value={formData.Hits} onChange={handleChange} />
      <input name="age" value={formData.AgeThatYear} onChange={handleChange} />
      <input name="year" value={formData.Year} onChange={handleChange} />
      <input name="rank" value={formData.Rank} onChange={handleChange} />
      <input name="bats" value={formData.Bats} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EditPlayer;
