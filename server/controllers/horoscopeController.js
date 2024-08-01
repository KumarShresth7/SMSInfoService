const { fetchHoroscope } = require('../utils/horoscope');
const { sendSMS } = require('../utils/sms');
const User = require('../models/User');

const sendHoroscopeUpdate = async (req, res) => {
  try {
    const { sign, day, category, language } = req.body;

    if (!sign || !day || !category || !language) {
      return res.status(400).json({ error: 'Sign, day, category, and language are required' });
    }

    const horoscopeData = await fetchHoroscope(sign, day, category, language);

    if (!horoscopeData || !horoscopeData.horoscope) {
      return res.status(500).json({ error: 'Invalid horoscope data structure' });
    }

    const message = `Horoscope for ${sign} (${day}): ${horoscopeData.horoscope}`;

    const users = await User.find({ services: 'horoscope' });
    if (users.length === 0) {
      return res.status(404).json({ message: "No users subscribed to horoscope updates" });
    }

    users.forEach((user) => {
      sendSMS(user.phoneNumber, message);
    });

    res.status(200).json({ message: "Horoscope updates sent successfully" });
  } catch (error) {
    console.error(`Error processing horoscope update: ${error.message}`);
    res.status(500).json({ error: 'Error processing horoscope update' });
  }
};

module.exports = { sendHoroscopeUpdate };
