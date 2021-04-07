import axios, {AxiosResponse} from "axios";

const API_KEY = process.env.VUE_APP_NASA_API_KEY;
const VUE_APP_IN_THEATERS = process.env.VUE_APP_IN_THEATERS;
const VUE_APP_COMING_SOON = process.env.VUE_APP_COMING_SOON;
const VUE_APP_YOUTUBETRAILER = process.env.VUE_APP_YOUTUBETRAILER;
const VUE_APP_FILMID = process.env.VUE_APP_FILMID;
const VUE_APP_FILMSEARCH = process.env.VUE_APP_FILMSEARCH;
const VUE_APP_TOP250 = process.env.VUE_APP_TOP250;
const VUE_APP_MOST_POPULAR_MOVIES = process.env.VUE_APP_MOST_POPULAR_MOVIES;
const VUE_APP_MOST_POPULAR_SERIES = process.env.VUE_APP_MOST_POPULAR_SERIES;

export const movieInTheaters = async () => {
  let results;
  try {
    const url = `${VUE_APP_IN_THEATERS}${API_KEY}`;
    const response = await axios.get(url);
    results = response.data.items;
  } catch (err) {
    if (err.response) {
      // client received an error response 
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};

export const movieComingSoon = async () => {
  let results;
  try {
    const url = `${VUE_APP_COMING_SOON}${API_KEY}`;
    const response = await axios.get(url);
    results = response.data.items;
  } catch (err) {
    if (err.response) {
      // client received an error response 
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};

export const youtubeTrailerLink = async (idVideo: string) => {
  let results;
  try {
    const url = `${VUE_APP_YOUTUBETRAILER}${API_KEY}/${idVideo}`;
    const response = await axios.get(url);
    results = response.data;
  } catch (err) {
    if (err.response) {
      // client received an error response 
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};

export const movieWithId = async (idVideo: string) => {
  let results;
  try {
    const url = `${VUE_APP_FILMID}${API_KEY}/${idVideo}/Ratings`;
    const response = await axios.get(url);
    results = response.data;
  } catch (err) {
    if (err.response) {
      // client received an error response 
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};

export const search = async (query: string) => {
  let results;
  try {
    const url = `${VUE_APP_FILMSEARCH}${API_KEY}/${query}`;
    const response = await axios.get(url);
    results = response.data.results;
  } catch (err) {
    if (err.response) {
      // client received an error response 
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};

export const top250 = async () => {
  let results;
  try {
    const url = `${VUE_APP_TOP250}${API_KEY}`;
    const response = await axios.get(url);
    results = response.data.items.slice(0,10);
  } catch (err) {
    if (err.response) {
      // client received an error response
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};

export const mostPopularMovies = async () => {
  let results;
  try {
    const url = `${VUE_APP_MOST_POPULAR_MOVIES}${API_KEY}`;
    const response = await axios.get(url);
    results = response.data.items.slice(0,10);
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};

export const mostPopularSeries = async () => {
  let results;
  try {
    const url = `${VUE_APP_MOST_POPULAR_SERIES}${API_KEY}`;
    const response = await axios.get(url);
    results = response.data.items.slice(0,10);
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      console.log("Server Error:", err);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err);
    } else {
      console.log("Client Error:", err);
    }
  }
  return results;
};
