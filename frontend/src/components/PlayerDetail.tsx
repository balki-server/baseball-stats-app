import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OpenAI from 'openai';

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

  interface PlayerDetailProps {
    player: Player;
  }
  
  const PlayerDetail: React.FC<PlayerDetailProps> = ({ player }) => {
    const [description, setDescription] = useState('');
  
    useEffect(() => {
      const fetchDescription = async () => {
        try {
          setDescription('');
          // Initialize OpenAI client
          const openai = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Assuming it's in your environment variable
            dangerouslyAllowBrowser: true // temporarily allowing this TODO: move the entire logic to backend service so the Key is not exposed to internet
          });
  
          // Make the OpenAI API call
          const response = await openai.chat.completions.create({
            model: 'gpt-4', // Use "gpt-4" or "gpt-3.5-turbo" depending on access
            messages: [
              {
                role: 'user',
                content: `Summarize the following baseball player in 5 sentences: Name: ${player.Player}`,
              },
            ],
            temperature: 0.7,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
  
          // Safely extract and check the assistant's message
          const assistantMessage = response.choices[0].message.content || 'No description available';
          setDescription(assistantMessage.trim());
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
        <p>LLM-powered info: {description || 'Loading description...'}</p>
      </div>
    );
  };
  
  export default PlayerDetail;
  