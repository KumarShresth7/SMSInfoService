const twilio = require('twilio')
require('dotenv').config()

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

const sendSMS = async (to, message, language) => {
    if (language !== 'en') {
    const translate = await import('translate');
    translate.engine = 'google'; // assuming you are using Google Translate API
    translate.key = process.env.GOOGLE_API_KEY;

    const translatedMessage = await translate(message, language);

    // Your SMS sending logic here
    // Use your preferred SMS gateway API to send the message
    console.log(`Sending SMS to ${phoneNumber}: ${translatedMessage}`);
    }

    client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        // to:'+916283760168'
        to
    }).then(message => console.log(`Message sent to ${to}: ${message.sid}`))
    .catch(error => console.error(error));
};


module.exports = {sendSMS}