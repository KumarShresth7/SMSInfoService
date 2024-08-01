const express = require('express')
const { sendNewsUpdate } = require('../controllers/newsController')
const router = express.Router()

router.get('/headlines',sendNewsUpdate)

module.exports = router