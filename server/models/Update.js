const mongoose = require('mongoose')

const UpdateSchema = {
    category:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    timestamp:{
        type:String,
        required:true
    }
}

module.exports = UpdateSchema