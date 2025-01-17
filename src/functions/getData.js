import { getEnv } from './getEnv';
export const getData = async url => {
  try {
    const backendUrl = getEnv('API_URL');
    console.log(backendUrl);
    
    const response = await fetch(`${backendUrl}/${url}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
