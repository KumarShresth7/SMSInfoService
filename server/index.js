const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err))

app.use('/api/users',require('./routes/userRouter'))
app.use('/api/weather',require('./routes/weatherRouter'))
app.use('/api/news',require('./routes/newsRouter'))
app.use('/api/schemes',require('./routes/schemeRouter'))

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
