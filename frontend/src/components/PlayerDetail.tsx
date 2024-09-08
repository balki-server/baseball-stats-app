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
        try {
          const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
              model: 'gpt-3.5-turbo', // or gpt-4 depending on your access
              prompt: `Summarize the following baseball player in 5 sentences: Name: ${player.Player}, Age: ${player.AgeThatYear}, Year: ${player.Year}`,
              temperature: 0.7,
              max_tokens: 100,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Make sure your key is stored securely in the environment variables
              },
            }
          );
          setDescription(response.data.choices[0].text.trim());
        } catch (error) {
          console.error('Error fetching player description from ChatGPT:', error);
          setDescription('Failed to fetch description.');
        }
      };
  
      fetchDescription();
    }, [player]);
  
    return (
      <div className="player-detail">
        <h2>{player.Player}</h2>
        <p>LLM-powered info:{description || 'Loading description...'}</p>
      </div>
    );
  };
  
  export default PlayerDetail;