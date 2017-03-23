var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = mongoose.model('Place');

router.route('/createPlace')

    // creates a new place
    .post(function(req, res){

        var place = new Place();
        place.googleID = req.body.googleID;
	for(var a = 0; a < 7; a++){
		for(var b = 0; b < 24; b++){
			place.heatMap.a.b = 0;
		}
	}
        place.save(function(err, place) {
            if (err){
                return res.send(500, err);
            }
            return res.json(place);
        });
    });

router.route('/places/id')

    // get place by object ID
    .get(function(req, res){
        Place.findById({googleID: req.params.googleID}, function(err, message){
            if(err)
                res.send(err);
            res.json(place);
        });
    })

    // adds or removes from heatmap
    .put(function(req, res){
        Place.findById({googleID: req.params.googleID} , function(err, place){
            if(err)
                res.send(err);
	    
	    var d = new Date();
	    var n = d.getHours();
	    var m = d.getDay();
	    
            place.heatMap.m.n += 1;
		
	    if(req.params.current == "Y"){
		    place.current += 1;
	    }else if{
		   place.current -= 1;
	    }

            place.save(function(err, place){
            if(err)
                    res.send(err);

                res.json(place);
            });
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
