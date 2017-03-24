var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Place = mongoose.model('Place');

router.route('/create')

    // Post request on route 'places/createPlace'
    .post(function(req, res){
		//Checks to see if a place exist
        	Place.find({'googleID': req.body.googleID}, function(err, place){
                        //If the place does not exist make a new one
			if(!place.length){
				var place = new Place();
                		place.googleID = req.body.googleID;

                	place.save(function (err, place) {
                    		if (err) {
                        	return res.send(500, err);
                    	}
			//Return a place if it was created
                   	 return res.json(place);
                	});
			//If a place does not exist return the one from the database
            		} else {

                		if (err) {
                    			return res.send(500, err);
                		}
                	return res.json(place);
            		}
        	});
    })


router.route('/id')
    // get place by google ID
    .get(function(req, res){
        console.log('tet');
        Place.find({'googleID':req.query.googleID}, function(err, place){
            //If there is no place say it does not exist
	    if(!place.length){
		res.send("Place does not exist");	
	    }else{
	    	if(err)
                	res.send(err);
            	res.json(place);
            }
	});
    })

    // Modifies the heat map
    .put(function(req, res){
	//Find the place for the heat map
        Place.find({'googleID': req.body.googleID} , function(err, place){
            if(err)
                res.send(err);
	    //Get the day and hour in (0-6, 0-23)	
	    var d = new Date();
	    var n = d.getHours();
	    var m = d.getDay();

	    //Increment the density overtime
            place[0]["heatMap"][m][n] += 1;
		
	    //Increment the current counter if increment is yes ("Y")	    	
	    if(req.body.increment == "Y"){
		   place[0].current += 1;
	    }
	    //Decrement the current counter if decrement is no ("N")
	    else if (req.body.increment == "N"){
		   //Only decrement if the current counter is bigger than zero
		   if(place[0].current > 0)
		   	place[0].current -= 1;
	    }

	    //Save the place after updates
	    place[0].save();
	
	    //Return the place that after the updates
            res.json(place);
        });
    })

    // deletes the place
    .delete(function(req, res) {
	//Use remove method on place
        Place.remove({
            googleID: req.query.googleID
        }, function(err) {
            if (err)
                res.send(err);
            res.json("deleted the place");
        });
    });

module.exports = router;
