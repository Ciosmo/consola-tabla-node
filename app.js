
const {crearArchivo}  = require('./helpers/multiplicar'); //Desestructuracion
const argv = require('./config/yargs');

console.clear();







    crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.underline.blue))
    .catch(err => console.log(err)); 

