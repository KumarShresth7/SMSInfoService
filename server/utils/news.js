const axios = require('axios');
require('dotenv').config()

const getNewsHeadlines = async (location) => {
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=${location}&apiKey=${process.env.NEWS_API_KEY}`;

        const { data } = await axios.get(url);
        const headlines = data.articles.map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
        }));

        return headlines;
    } catch (error) {
        console.error('Error fetching news headlines:', error);
        return [];
    }
};

module.exports = { getNewsHeadlines };
