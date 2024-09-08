import React, { useEffect, useState } from 'react';
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
interface PlayerDetailProps {
  player: Player;
}

const PlayerDetail: React.FC<PlayerDetailProps> = ({ player }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchDescription = async () => {
      // Mocking API call to fetch description (you can replace this with a real API call)
      //const response = await axios.post('https://api.openai.com/v1/completions', {
      //  model: 'gpt-3.5-turbo',
      //  prompt: `Summarize the following baseball player in 5 sentences: ${player.Player}, Hits: ${player.Hits}, Age: ${player.AgeThatYear}, Year: ${player.Year}`,
      //  temperature: 0.5,
      //  max_tokens: 100,
      //});
      //setDescription(response.data.choices[0].text);
      setDescription("ChatGPT powered info coming soon!");
    };

    fetchDescription();
  }, [player]);

  return (
    <div className="player-detail">
      <h2>{player.Player}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlayerDetail;
