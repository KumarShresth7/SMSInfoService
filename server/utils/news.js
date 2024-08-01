const axios = require('axios');
require('dotenv').config();

const fetchBusinessNews = async () => {
  const options = {
    method: 'GET',
    url: 'https://google-news13.p.rapidapi.com/business',
    params: { lr: 'en-IN' },
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'google-news13.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log('News Data:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error(`Error fetching business news: ${error}`);
    throw new Error('Error fetching business news');
  }
};

module.exports = { fetchBusinessNews };
