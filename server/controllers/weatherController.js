const express = require('express')
const {getWeather} = require('../utils/weather')
const {sendSMS} = require('../utils/sms')
const User = require('../models/User')

const sendWeatherUpdate = async(req,res)=>{
    const {location} = req.body;
    try {
        const weatherData = await getWeather(location);
        if (!weatherData) {
            return res.status(500).json({ error: 'Failed to fetch weather data' });
        }

        const message = `Weather Update for ${location}:\n${weatherData.weather[0].description}\nTemperature: ${Math.round(weatherData.main.temp - 273.15)}°C`;

        const users = await User.find({ services: 'weather' });
        users.forEach(user => {
            sendSMS(user.phoneNumber, message, user.language);
        });

        res.status(200).json({ message: 'Weather updates sent successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {sendWeatherUpdate}
