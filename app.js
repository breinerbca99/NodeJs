const tabla = require('./multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
//console.log(argv);
//console.log(base);
//console.log(limite);


switch (comando) {
    case 'crear':
        tabla.crearBase(base, limite)
            .then(archivo => {
                console.log(archivo);
            })
            .catch(err => {
                console.log(err)
            });
        break;
    case 'listar':
        tabla.listarTabla(base, limite);
        break;
    default:
        console.log('Comando no reconocido');
}