const express = require("express");
const { getWeather } = require("../utils/weather");
const { translateText } = require("../controllers/translateController");
const { sendSMS } = require("../utils/sms");
const User = require("../models/User");
require('dotenv').config();

const sendWeatherUpdate = async (req, res) => {
  try {
    const { location, targetLang } = req.body;
    if (!location || !targetLang) {
      return res.status(400).json({ error: "Location and target language are required" });
    }

    const weatherData = await getWeather(location);
    if (!weatherData) {
      return res.status(500).json({ error: "Failed to fetch weather data" });
    }

    const weatherDescription = weatherData.weather[0].description;
    const translatedWeatherDescription = await translateText(weatherDescription, targetLang);

    const message = `Weather Update for ${location}: ${translatedWeatherDescription}. Temperature: ${weatherData.main.temp}°C.`;

    const users = await User.find({ services: "weather" });
    users.forEach((user) => {
      sendSMS(user.phoneNumber, message);
    });

    res.status(200).json({ message: "Weather updates sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { sendWeatherUpdate };
