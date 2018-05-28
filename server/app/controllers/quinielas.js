var Quiniela = require('../models/quiniela');
 
exports.getQuiniela = function(req, res, next){
    Quiniela.find(function(err, quinielas) {
        if (err){
            res.send(err);
        }
        res.json(quinielas);
    });
}
 
exports.createQuiniela = function(req, res, next){
 
    Quiniela.create({
        email : req.body.email,
        equipo1: req.body.equipo1,
        equipo2: req.body.equipo2,
        gol1: req.body.gol1,
        gol2: req.body.gol2,
    }, function(err, quiniela) {
 
        if (err){
            res.send(err);
        }
 
        Quiniela.find(function(err, quinielas) {
 
            if (err){
                res.send(err);
            }
 
            res.json(quinielas);
 
        });
 
    });
 
}
 
exports.deleteQuiniela = function(req, res, next){
 
    Quiniela.remove({
        _id : req.params.quiniela_id
    }, function(err, quiniela) {
        res.json(quiniela);
    });
 
}