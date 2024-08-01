const { fetchBusinessNews } = require('../utils/news');
const { sendSMS } = require('../utils/sms');
const User = require('../models/User');

const sendNewsUpdate = async (req, res) => {
  try {
    const newsData = await fetchBusinessNews();

    if (!newsData || !newsData.items) {
      return res.status(500).json({ error: 'Invalid news data structure' });
    }

    // Extract the top 5 headlines
    const headlines = newsData.items
      .slice(0, 5) // Limit to top 5 headlines
      .map(item => item.title)
      .join(', ');

    // Truncate the message if necessary
    const maxLength = 160; // Adjust as needed
    let message = `Business News: ${headlines}`;
    if (message.length > maxLength) {
      message = message.substring(0, maxLength - 3) + '...'; // Truncate and add ellipsis
    }

    const users = await User.find({ services: 'news' });
    if (users.length === 0) {
      return res.status(404).json({ message: "No users subscribed to business news updates" });
    }

    users.forEach((user) => {
      sendSMS(user.phoneNumber, message);
    });

    res.status(200).json({ message: "Business news updates sent successfully" });
  } catch (error) {
    console.error(`Error processing business news update: ${error.message}`);
    res.status(500).json({ error: 'Error processing business news update' });
  }
};

module.exports = { sendNewsUpdate };
