
const { boolean, number } = require('yargs');

const argv= require("yargs")

                .option("b", {
                    alias: 'base',
                    type: "number",
                    demandOption:true,
                    describe: "Es la base de la tabla a multiplicar"
                })
                .option("l", {
                    alias: "listar",
                    type:'boolean',
                    default:false,
                    describe: "Muestra la tabla en consola"
                })
                .option("h", {
                    alias:"hasta",
                    type:number,
                    demandOption:false,
                    describe: "Numero hasta donde llegua la tabla"


                })
                .check( (argv, options) =>{
                    if ( isNaN (argv.b) ) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true; // se debe retonar true si no hay error
                })
                .argv;


module.exports = argv;