import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerDetail = ({ player }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchDescription = async () => {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'gpt-3.5-turbo',
        prompt: `Summarize the following baseball player in 5 sentences: ${player.player}, Hits: ${player.hits}, Age: ${player.age}, Year: ${player.year}`,
        temperature: 0.5,
        max_tokens: 100,
      });
      setDescription(response.data.choices[0].text);
    };

    fetchDescription();
  }, [player]);

  return (
    <div className="player-detail">
      <h2>{player.player}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlayerDetail;
