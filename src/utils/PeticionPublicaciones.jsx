import axios from 'axios';

export const peticionPublicaciones = async (props) => {
  const cachedData = sessionStorage.getItem('publicaciones');

  if (cachedData) {
    return Promise.resolve(JSON.parse(cachedData));
  }

  const response = await axios.get(`http://localhost:3001/admincreate/${props}`);
    const data = response.data;
    sessionStorage.setItem(`publicaciones${props}`, JSON.stringify(data));
    return data;
};
