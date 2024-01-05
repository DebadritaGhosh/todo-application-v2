import axios from 'axios';
import { persistor } from '../store/store';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
});


export default api;
