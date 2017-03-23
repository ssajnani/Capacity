var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    createdBy: String,		//should be changed to ObjectId, ref "User"
    createdAt: {type: Date, default: Date.now},
    _id: String,
    googleID: String,
    text: String,
    voteCount: String
});

mongoose.model('Message', messageSchema);
