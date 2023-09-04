import axios from "axios";


const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '46364984fcmsh3ca26eb96f9fdf4p1917e0jsnabd24278d3ff',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`,options);
   return data;
}
