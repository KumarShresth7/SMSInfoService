const express = require('express')
const { sendHoroscopeUpdate } = require('../controllers/horoscopeController')
const router = express.Router()

router.get('/send-horoscope',sendHoroscopeUpdate)

module.exports = router