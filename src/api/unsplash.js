import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 967db0e580f206768b2a58782004f5c2052d94be00d661ba7d451aaa66bb7329'
  }
});
