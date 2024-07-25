const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    services: [String], //healthcare,weather,public service kuch bhi ho skta hai..isliye array bana diya
    language: {
        type: String,
        default: 'en'
    }
});

module.exports = mongoose.model('User', UserSchema);
