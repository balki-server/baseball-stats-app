import React, { useState } from 'react';
import axios from 'axios';

const EditPlayer = ({ player, onSave }) => {
  const [formData, setFormData] = useState({ ...player });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.put(`/players/${player.id}`, formData).then(() => {
      onSave();
    });
  };

  return (
    <div className="edit-player">
      <input name="player" value={formData.player} onChange={handleChange} />
      <input name="hits" value={formData.hits} onChange={handleChange} />
      <input name="age" value={formData.age} onChange={handleChange} />
      <input name="year" value={formData.year} onChange={handleChange} />
      <input name="rank" value={formData.rank} onChange={handleChange} />
      <input name="bats" value={formData.bats} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EditPlayer;
