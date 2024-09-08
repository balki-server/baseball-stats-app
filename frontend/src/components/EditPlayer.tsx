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
  
    // Update formData when the player prop changes
    useEffect(() => {
      console.log('Player prop changed:', player);        
      setFormData({ ...player });
    }, [player]);
  
    // Update formData when input fields change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log('Input changed:', name, value); // Log changes for debugging      
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,  // Update the specific field in the form data
      }));
    };
  
    const handleSubmit = () => {
        // Log the URL and data being sent for debugging
        console.log('Submitting form data:', formData);
      
        // Make sure the player ID is appended to the URL correctly
        // axios.put(`/players/${player.id}`, formData)
        axios.put(`http://localhost:5000/players/${player.id}`, formData)
          .then(() => {
            onSave(formData); // Call onSave to update the parent component state after saving
          })
          .catch((error) => {
            console.error('Error updating player:', error); // Log any error for debugging
          });
      };


  return (
    <div className="edit-player">
      <h2>Edit Player</h2>
      <label>Player {formData.id} Name:</label>
      <input name="Player" value={formData.Player} onChange={handleChange} />
      <label>Hits:</label>
      <input name="Hits" value={formData.Hits} onChange={handleChange} />
      <label>Age:</label>
      <input name="AgeThatYear" value={formData.AgeThatYear} onChange={handleChange} />
      <label>Year:</label>
      <input name="Year" value={formData.Year} onChange={handleChange} />
      <label>Rank:</label>
      <input name="Rank" value={formData.Rank} onChange={handleChange} />
      <label>Bats:</label>
      <input name="Bats" value={formData.Bats} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EditPlayer;
