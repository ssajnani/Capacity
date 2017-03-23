var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    createdBy: String,		//should be changed to ObjectId, ref "User"
    createdAt: {type: Date, default: Date.now},
    id: String,
    googleID: String,
    text: String,
    reported: Boolean,
    voteCount: Number
});

mongoose.model('Message', messageSchema);
