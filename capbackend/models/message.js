var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    id: String,
    googleID: String,
    user: String,
    text: String,
    reported: Boolean,
    voteCount: Number
});

mongoose.model('Message', messageSchema);