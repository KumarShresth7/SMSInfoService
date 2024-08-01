const User = require('../models/User');

const Subscribe = async (req, res) => {
    const { name, phoneNumber, services, language } = req.body;
    try {
        let user = await User.findOne({ phoneNumber });
        if (!user) {
            user = new User({ name, phoneNumber, services, language });
        } else {
            user.services = services;
            user.language = language;
        }
        await user.save();
        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const UnSubscribe = async (req, res) => {
    const { phoneNumber } = req.body;
    try {
        await User.deleteOne({ phoneNumber });
        res.status(200).json({ message: 'Unsubscribed successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { Subscribe, UnSubscribe };
