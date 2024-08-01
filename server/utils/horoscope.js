const axios = require('axios');
require('dotenv').config();

const fetchHoroscope = async (sign, day, category, language) => {
  const options = {
    method: 'GET',
    url: `https://horoscopes-ai.p.rapidapi.com/get_horoscope/${sign}/${day}/${category}/${language}`,
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'horoscopes-ai.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log('Horoscope Data:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error(`Error fetching horoscope: ${error}`);
    throw new Error('Error fetching horoscope');
  }
};

module.exports = { fetchHoroscope };
