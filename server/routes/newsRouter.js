const express = require('express')
const { headlines } = require('../controllers/newsController')
const router = express.Router()

router.get('/headlines',headlines)

module.exports = router