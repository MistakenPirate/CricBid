import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Update with your backend URL
});

export const fetchPlayers = () => api.get('/players');
export const buyPlayer = (userId, playerId) => api.put(`/users/${userId}/players/${playerId}/buy`);
