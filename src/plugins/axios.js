import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

axios.defaults.baseURL = `http://127.0.0.1:8000/api/`