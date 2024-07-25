const express = require('express')
const router = express.Router()
const {Subscribe,UnSubscribe} = require('../controllers/userController')

router.post('/subscribe',Subscribe)
router.post('/unsubscribe',UnSubscribe)

module.exports = router