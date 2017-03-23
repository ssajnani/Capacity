var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var randomstring = require('randomstring');
var Message = mongoose.model('Message');

// Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if(req.method === "GET"){
        return next();
    }
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/#login');
}

// Register the authentication middleware
router.use('/createMessage', isAuthenticated);

router.route('/createMessage')

    // creates a new message
    .post(function(req, res){

        var message = new Message();
        message.text = req.body.text;
        message.createdBy = req.body.createdBy;
        message.id = randomstring.generate();
        message.googleID = req.body.googleID;
        message.save(function(err, message) {
            if (err){
                return res.send(500, err);
            }
            return res.json(message);
        });
    });

// Register authentication middleware
router.use('/messages/id', isAuthenticated);

router.route('/messages/id')

    // get message by object ID
    .get(function(req, res){
        Message.findById(req.params.id, function(err, message){
            if(err)
                res.send(err);
            res.json(message);
        });
    })

    // upvotes specific message
    .put(function(req, res){
        Message.findById(req.params.id, function(err, message){
            if(err)
                res.send(err);

            if(req.params.voteType == 'report')
                message.isReported = true;

            else if(req.params.voteType == 'upvote')
                message.voteCount += 1;

            else if(req.params.voteType == 'downvote')
                message.voteCount -= 1;

            message.save(function(err, message){
                if(err)
                    res.send(err);

                res.json(message);
            });
        });
    })

    // deletes the post
    .delete(function(req, res) {
        Message.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                res.send(err);
            res.json("deleted :(");
        });
    });

// get all messages for place
router.route('/messages')

    // gets all messages per place
    .get(function(req, res){
        Message.find({googleID: req.params.googleID}, function(err, messages){
            if(err) {
                return res.send(500, err);
            }
            return res.send(200, messages);
        });
    });

module.exports = router;
