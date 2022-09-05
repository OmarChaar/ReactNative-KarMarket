import axios from 'axios';
import Config from 'react-native-config';

export const FIREBASE_ROOT_URL = axios.create({
  baseURL: Config.FIREBASE_ROOT_URL,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});