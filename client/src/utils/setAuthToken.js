import axios from 'axios';

const setAuthToken = (data) => {
  if (data) {
    axios.defaults.headers.common['x-auth-token'] = data.token;
    localStorage.setItem('token', data.token);
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
