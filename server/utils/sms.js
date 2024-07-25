const twilio = require('twilio')
const translate = require('translate')
require('dotenv').config()

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

const sendSMS = async (to, message, language) => {
    if (language !== 'en') {
        message = await translate(message, { to: language });
    }

    client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to:'+916283760168'
    }).then(message => console.log(`Message sent to ${to}: ${message.sid}`))
    .catch(error => console.error(error));
};


module.exports = {sendSMS}