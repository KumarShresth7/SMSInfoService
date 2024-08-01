const express = require("express");
const { getWeather } = require("../utils/weather");
const { sendSMS } = require("../utils/sms");
const User = require("../models/User");
require('dotenv').config();

const sendWeatherUpdate = async (req, res) => {
  try {
    const { location } = req.body;

    if (!location) {
      return res.status(400).json({ error: "Location is required" });
    }

    const weatherData = await getWeather(location);
    if (!weatherData) {
      return res.status(500).json({ error: "Failed to fetch weather data" });
    }

    const weatherDescription = weatherData.weather[0].description;
    const temperature = Math.round(weatherData.main.temp - 273);

    const message = `Weather Update for ${location}: ${weatherDescription}. Temperature: ${temperature}°C.`;

    const users = await User.find({ services: "weather" });
    if (users.length === 0) {
      return res.status(404).json({ message: "No users subscribed to weather updates" });
    }

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
