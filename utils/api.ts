import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.29.101:3000', // change this with your current IP address
});

export const getAllProperties = async () => {
  const res = await api.get('/properties');
  return res.data;
};

export const getBookings = async () => {
  const res = await api.get('/bookings');
  return res.data;
};

export const getPropertyByID = async (id: string) => {
  const res = await api.get(`/properties/${id}`);
  return res.data;
};

export const getProfile = async () => {
  const res = await api.get('/profile');
  return res.data;
};