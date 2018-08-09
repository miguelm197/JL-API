var mongoose = require('mongoose');
require('../models/mdl_transistor.js');

var SCH_Transistor = mongoose.model('mdl_Transistor');




//GET - Retorna todas los transistores de la Base de Datos
exports.consultaTransistores = function (req, res) {
    console.log("llegoo")
    // console.log(res)
    console.log("=============================================")
    // console.log(req)
    SCH_Transistor.find(function (err, transistores) {
        console.log(err);
        console.log("==================================");
        console.log(transistores);
        if (err) res.send(500, err.message);
        console.log('GET /tareas');
        res.status(200).jsonp(transistores);
    });
};


//GET - Retorna  el transistor con id
exports.consultaTransistorPorId = function (req, res) {
    SCH_Transistor.findById(req.params.id, function (err, transistor) {
        if (err) res.send(500, err.message);
        console.log('GET /transistor/' + req.params.id);
        res.status(200).jsonp(transistor);
    });
};




//POST - Agrega una nuevo transistor en la Base de Datos
exports.agregarTransistor = function (req, res) {
    console.log('POST');
    console.log(req.body);

    var transistor = new SCH_Transistor({
        codigo: req.body.codigo,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
    });

    transistor.save(function (err, transistor) { 
        if (err) return res.status(500).send(err.message);
        console.log('POST Se agregó una transistor nueva');

        res.status(200).jsonp(transistor);
    });
};



//PUT - Actualizar un transistor en la Base de Datos
exports.actualizarTransistor = function (req, res) {
    SCH_Transistor.findById(req.params.id, function (err, transistor) {
        transistor.codigo = req.body.codigo,
            transistor.stock = req.body.stock,
            transistor.descripcion = req.body.descripcion,

            transistor.save(function (err) {
                if (err) return res.send(500, err.message);
                console.log('PUT Se modificó un transistor');

                res.status(200).jsonp(transistor);
            });
    });
};



//DELETE - Eliminar un transistor de la Base de Datos
exports.eliminarTransistor = function (req, res) {
    SCH_Transistor.findById(req.params.id, function (err, transistor) {
        transistor.remove(function (err) {
            if (err) return res.send(500, err.message);

            console.log('DELETE Se eliminó un transistor');

            res.status(200);
        })
    });
};