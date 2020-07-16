const mongoose = require('mongoose');

// Create a new database table in Mongo to hold the authors that are submitted
const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema)