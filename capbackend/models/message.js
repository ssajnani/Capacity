var mongoose = require('mongoose');
var randomstring = require('randomstring');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    createdBy: String,		//should be changed to ObjectId, ref "User"
    createdAt: {type: Date, default: Date.now},
    _id: randomstring.generate(),
    googleID: String,
    text: String,
    voteCount: 0
});

mongoose.model('Message', messageSchema);
