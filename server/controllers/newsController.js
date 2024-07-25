const { getStateNewsHeadlines } = require('../utils/newsScraper');

const headlines =  async (req, res) => {
    const { state } = req.body; // Get the state from query parameters
    if (!state) {
        return res.status(400).json({ error: 'State is required' });
    }

    try {
        const headlines = await getStateNewsHeadlines(state);
        res.status(200).json(headlines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {headlines}
