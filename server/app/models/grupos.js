 var mongoose = require('mongoose');

var GruposSchema = new mongoose.Schema({
	
	mail: {
		type: mongoose.Schema.Types.ObjectId, 
        ref 'user'
	}
	partido: String
	equipo1: String,
	equipo2: String,
	gol1: Number,
	gol2: Number
});
 
module.exports = mongoose.model('ganadores', GanadoresSchema);