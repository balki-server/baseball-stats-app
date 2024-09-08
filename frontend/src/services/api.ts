import axios from 'axios';

export const getPlayers = () => {
  return axios.get('/players');
};

export const updatePlayer = (id, data) => {
  return axios.put(`/players/${id}`, data);
};
