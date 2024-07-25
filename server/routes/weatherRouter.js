const express = require('express')
const router = express.Router()
const {sendWeatherUpdate} = require('../controllers/weatherController')

router.post('/send-update',sendWeatherUpdate)

module.exports = router