var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Place = mongoose.model('Place');

router.route('/create')

    // Post request on route 'places/createPlace'
    .post(function(req, res){
		//Checks to see if a place exist
        	Place.findOne({'googleID': req.body.googleID}, function(err, place){
                        //If the place does not exist make a new one
			if(place == null){
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
    .post(function(req, res){
	//Find the place for the heat map
        Place.findOne({'googleID': req.body.googleID} , function(err, place){

        console.log(req.body.googleID);

        if(place == null){
            res.send("Place does not exist");
        }

        if(err) { res.send(err) };
	    //Get the day and hour in (0-6, 0-23)	
	    var d = new Date();
	    var n = d.getHours();
	    var m = d.getDay();

        console.log(place);
	    //Increment the density overtime
        place["heatMap"][m][n] += 1;
		
	    //Increment the current counter if increment is yes ("Y")	    	
	    if(req.body.increment == "Y"){
		   place.current += 1;
	    }
	    //Decrement the current counter if decrement is no ("N")
	    else if (req.body.increment == "N"){
		   //Only decrement if the current counter is bigger than zero
		   if(place.current > 0)
		   	place.current -= 1;
	    }

	    //Save the place after updates
	    place.save();
	
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
