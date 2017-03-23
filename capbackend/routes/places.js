var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Place = mongoose.model('Place');

router.route('/createPlace')

    // get place by object ID
    .post(function(req, res){
	if(Place.findById({googleID:req.body.googleID}).count() > 0){
        	Place.findById({googleID: req.body.googleID} 
,function(err, place){
                        if (err){
                                return res.send(500, err);
                        }
                        return res.json(place);
		});
	}
	else{
		var place = new Place();
		place.googleID = req.body.googleID;

		place.save(function(err, place) {
			if (err){
				return res.send(500, err);
			}
			return res.json(place);
		});

        }
    })


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
	    
            place.heatMap.m.toString().n.toString() += 1;
		
	    if(req.params.current == "Y"){
		    place.current += 1;
	    }else{
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
