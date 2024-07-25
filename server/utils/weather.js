const axios = require('axios')
require('dotenv').config()

const getWeather = async(location)=>{
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHERMAP_API_KEY}`)
        return response.data
    } catch (error) {
        console.error('Error fetching weather data ',error)
    }
}

module.exports = {getWeather}