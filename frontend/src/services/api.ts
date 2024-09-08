import axios from 'axios';

// Define the Player type
interface Player {
  id: number;
  player: string;
  hits: number;
  age: number;
  year: number;
  rank: number;
  bats: string;
}

// Fetch players (already typed)
export const getPlayers = () => {
  return axios.get('/players');
};

// Update player with typed parameters
export const updatePlayer = (id: number, data: Player) => {
  return axios.put(`/players/${id}`, data);
};
