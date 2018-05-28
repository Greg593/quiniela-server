 var mongoose = require('mongoose');
 
var QuinielaSchema = new mongoose.Schema({
 	
 	_id: mongoose.Schema.Types.ObjectId,
 	email: {
        type: mongoose.Schema.Types.ObjectId, 
        ref 'user'
    },
    grupos: [
    	grupo: [
    		partido: {
    			equipo1: String,
    			equipo2: String,
    			gol1: Number,
    			gol2: Number
     		}
    	]
    ]
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('quiniela', QuinielaSchema);