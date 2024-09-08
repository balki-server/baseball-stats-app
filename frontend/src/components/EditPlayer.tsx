import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

interface EditPlayerProps {
  player: Player;
  onSave: (updatedPlayer: Player) => void;
}

const EditPlayer: React.FC<EditPlayerProps> = ({ player, onSave }) => {
  const [formData, setFormData] = useState<Player>({ ...player });

  // Use useEffect to update formData whenever the player prop changes
  useEffect(() => {
    setFormData({ ...player }); // Update formData with the new player data
  }, [player]); // Re-run this effect whenever the player prop changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.put(`/players/${player.id}`, formData).then(() => {
      onSave(formData); // Save changes after successful API call
    });
  };

  return (
    <div className="edit-player">
      <h2>Edit Player</h2>
      <label>Player Name:</label>
      <input name="player" value={formData.Player} onChange={handleChange} />
      <label>Hits:</label>
      <input name="hits" value={formData.Hits} onChange={handleChange} />
      <label>Age:</label>
      <input name="age" value={formData.AgeThatYear} onChange={handleChange} />
      <label>Year:</label>
      <input name="year" value={formData.Year} onChange={handleChange} />
      <label>Rank:</label>
      <input name="rank" value={formData.Rank} onChange={handleChange} />
      <label>Bats:</label>
      <input name="bats" value={formData.Bats} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EditPlayer;
