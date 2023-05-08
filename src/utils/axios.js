import axios from 'axios';

const customFetch = axios.create({
    baseURL: 'http://localhost:4000/api/auth/register',
  });

export default customFetch