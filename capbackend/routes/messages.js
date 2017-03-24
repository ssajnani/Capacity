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
        console.log(req.query);
        var message = new Message();
        message.text = req.query.text;
        message.id = randomstring.generate();
        message.reported = false;
        message.googleID = req.query.googleID;
        message.voteCount = 0;
        message.save(function(err, message) {
            if (err){
                return res.send(500, err);
            }
            return res.json(message);
        });
    });

// Register authentication middleware
router.use('/id', isAuthenticated);

router.route('/id')

    // get message by object ID
    .get(function(req, res){
        Message.find(req.query.id, function(err, message){
            if(err)
                res.send(err);
            res.json(message);
        });
    })

    // upvotes specific message
    .put(function(req, res){
        Message.find({id: req.query.id}, function(err, message){
            if(err)
                res.send(err);

            try {
                if(req.query.voteType == 'report')
                    message[0].reported = true;

                else if(req.query.voteType == 'upvote')
                    message[0].voteCount += 1;

                else if(req.query.voteType == 'downvote')
                    message[0].voteCount -= 1;

                message[0].save();
                res.json(message);
            } catch(err) {
                console.log('undefined object, no action taken');
                res.json(message);
            }
        });
    })

    // deletes the post
    .delete(function(req, res) {
        Message.remove({
            id: req.query.id
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
        Message.find({googleID: req.query.googleID}, function(err, messages){
            if(err) {
                return res.send(500, err);
            }
            return res.json(200, messages);
        });
    });

module.exports = router;
