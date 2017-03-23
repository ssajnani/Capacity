var mongoose = require('mongoose');
var randomstring = require('randomstring');
var Schema = mongoose.Schema;

var placeSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    googleID: String,
    heatMap: {
	0: { 
		0:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		1:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		2:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		3:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		4:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		5:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		6:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		7:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		8:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		9:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},  
                10:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                11:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                12:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                13:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                14:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                15:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                16:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                17:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                18:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		19:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},          
                20:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                21:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                22:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                23:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})}
	},	
	1: { 
		0:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		1:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		2:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		3:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		4:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		5:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		6:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		7:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		8:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		9:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},  
                10:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                11:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                12:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                13:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                14:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                15:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                16:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                17:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                18:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		19:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},          
                20:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                21:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                22:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                23:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})}
	},
	2: { 
		0:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		1:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		2:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		3:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		4:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		5:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		6:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		7:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		8:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		9:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},  
                10:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                11:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                12:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                13:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                14:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                15:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                16:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                17:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                18:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		19:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},          
                20:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                21:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                22:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                23:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})}
	},
	3: { 
		0:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		1:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		2:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		3:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		4:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		5:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		6:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		7:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		8:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		9:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},  
                10:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                11:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                12:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                13:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                14:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                15:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                16:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                17:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                18:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		19:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},          
                20:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                21:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                22:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                23:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})}
	},
	4: { 
		0:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		1:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		2:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		3:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		4:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		5:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		6:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		7:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		8:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		9:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},  
                10:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                11:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                12:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                13:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                14:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                15:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                16:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                17:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                18:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		19:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},          
                20:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                21:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                22:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                23:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})}
	},
	5: { 
		0:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		1:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		2:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		3:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		4:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		5:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		6:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		7:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		8:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		9:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},  
                10:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                11:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                12:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                13:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                14:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                15:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                16:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                17:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                18:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		19:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},          
                20:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                21:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                22:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                23:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})}
	},
	6: { 
		0:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		1:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		2:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		3:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		4:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		5:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		6:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		7:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		8:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		9:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},  
                10:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                11:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                12:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                13:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                14:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                15:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                16:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                17:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                18:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
		19:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},          
                20:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},                             
                21:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                22:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})},
                23:{ type: Number, min: 0, default: 
randomstring.generate({length: 3, charset: 'numeric'})}
	}
    },
	current: { type: Number, min: 0, default: randomstring.generate({length: 3, charset: 'numeric'})}
});

mongoose.model('Place', placeSchema);
