const cron = require('node-cron');
const { sendHoroscopeUpdate } = require('../controllers/horoscopeController');

// Schedule the task to run every 24 hours
cron.schedule('0 0 * * *', async () => {
  console.log('Running the scheduled task to send horoscope updates');

  // Define the default request body
  const req = {
    body: {
      sign: 'cancer', // or fetch dynamically if needed
      day: 'today',
      category: 'general',
      language: 'hi'
    }
  };

  // Define a mock response object
  const res = {
    status: (statusCode) => ({
      json: (data) => {
        console.log(`Status: ${statusCode}`, data);
      }
    })
  };

  try {
    await sendHoroscopeUpdate(req, res);
  } catch (error) {
    console.error(`Error in scheduled task: ${error.message}`);
  }
});
