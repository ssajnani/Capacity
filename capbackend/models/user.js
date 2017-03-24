//Add packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//User model for backend
var userSchema = new mongoose.Schema({
    username: String,
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
})

mongoose.model('User', userSchema);
