const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

const translateText = async (text, targetLang) => {
    const data = new FormData();
    data.append('q', text);
    data.append('target', targetLang);

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
            ...data.getHeaders()
        },
        data: data
    };

    try {
        const response = await axios.request(options);
        return response.data.data.translations[0].translatedText;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to translate text');
    }
};

module.exports = { translateText };
