const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://favam.vercel.app';
export default  API_BASE_URL;