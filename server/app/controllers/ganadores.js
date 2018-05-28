var Ganador = require('../models/ganadores');

exports.getGanadores = function(req, res, next){
 
    Ganador.find(function(err, ganadores) {
 
        if (err){
            res.send(err);
        }
 
        res.json(ganadores);
 
    });
 
}