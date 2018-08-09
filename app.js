const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express(); 

var conS = "mongodb://root:toor700@ds018248.mlab.com:18248/juliodb?authSource=juliodb";

mongoose.connect(conS, function (err, res) {
    if (err) throw err;
    console.log('Conectado a la Base de Datos');
});


//ESTO PERMITE RECIBIR PETICIONES FUERA DE ESTE DOMINIO
function perimitirCrossDomain(req, res, next) {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*');
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// Middlewares
app.use(perimitirCrossDomain);
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());


// // Imports de Modelo y Controlador
// var modelo = require('./models/mdl_tarea')(app, mongoose);
// var CtrlTarea = require('./controllers/tareas');



// Ruteo
var router = express.Router();


router.get('/', function (req, res) {
    res.send("Que tal sabandijas!");
    // next();
});





app.use(router);

// Start server
app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});