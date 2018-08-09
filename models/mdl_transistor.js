exports = module.exports = function (app, mongoose) {

    var esquemaTransistor = new mongoose.Schema({
        codigo: { type: String },
        stock: { type: String },
        descripcion: { type: String },
    });

    mongoose.model('mdl_Transistor', esquemaTransistor, 'transistores');
    //                 /              |            \
    //                /               |             \
    //      Nombre de referencia      |              |
    //                      esquema exportado        |
    //                                       documento de la bd


    



};