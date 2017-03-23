var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Place = mongoose.model('Place');

router.route('/createPlace')
    
// get place by object ID
    .post(function (req, res) {
        Place.find({'googleID': req.body.googleID}, function (err,
                                                              place) {
            if (!place.length) {
                var place = new Place();
                place.googleID = req.body.googleID;

    // get place by object ID
    .post(function(req, res){
        	Place.find({'googleID': req.body.googleID}, function(err, place){
                        if(!place.length){
				var place = new Place();
                		place.googleID = req.body.googleID;

                place.save(function (err, place) {
                    if (err) {
                        return res.send(500, err);
                    }
                    return res.json(place);
                });
            } else {

                if (err) {
                    return res.send(500, err);
                }
                return res.json(place);
            }
        });
    })


router.route('/id')
    // get place by object ID
    .post(function(req, res){
        Place.find({'googleID':req.body.googleID}, function(err, place){
            if(!place.length){
		res.send("Place does not exist");	
	    }else{
	    	if(err)
                	res.send(err);
            	res.json(place);
            }
	});
    })

    // adds or removes from heatmap
    .put(function(req, res){
        Place.find({'googleID': req.body.googleID} , function(err, place){
            if(err)
                res.send(err);
	    console.log(place);   
	    var d = new Date();
	    var n = d.getHours();
	    var m = d.getDay();
		
            place[0]["heatMap"][m][n] += 1;
	    	
	    if(req.params.increment == "Y"){
		   place.current += 1;
	    }else if (req.params.increment == "N"){
		   place.current -= 1;
	    }


	    place.save();
            res.json(place);

        });
    })

    // deletes the place
    .delete(function(req, res) {
        Place.remove({
            googleID: req.params.googleID
        }, function(err) {
            if (err)
                res.send(err);
            res.json("deleted :(");
        });
    });

module.exports = router;
