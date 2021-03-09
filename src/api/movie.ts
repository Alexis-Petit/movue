import axios from 'axios';

const API_KEY = process.env.VUE_APP_NASA_API_KEY;
const VUE_APP_IN_THEATERS = process.env.VUE_APP_IN_THEATERS;
const VUE_APP_COMING_SOON = process.env.VUE_APP_COMING_SOON;

export const movieInTheaters = async () => {
  let results;
  try {
    const url = `${VUE_APP_IN_THEATERS}${API_KEY}`
    const response = await axios.get(url)
    console.log(response)
    results = response.data.results
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      console.log('Server Error:', err)
    } else if (err.request) {
      // client never received a response, or request never left
      console.log('Network Error:', err)
    } else {
      console.log('Client Error:', err)
    }
  }
  return results;
};

export const movieComingSoon = async (): Promise<string> => {
  let results;
  try {
    const url = `${VUE_APP_COMING_SOON}${API_KEY}`
    const response = await axios.get(url)
    console.log(response)
    results = response.data.results
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      console.log('Server Error:', err)
    } else if (err.request) {
      // client never received a response, or request never left
      console.log('Network Error:', err)
    } else {
      console.log('Client Error:', err)
    }
  }
  return results;
};


