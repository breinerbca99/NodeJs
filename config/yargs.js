const opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Guarda la tabla de multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv
}

/*
console.log(argv.base);
console.log(argv.limit);
console.log(argv._);
console.log(argv._[0]);
*/

/*
1)node app listar --base 5=node app listar --b 5
node app listar --b 5 --l 18=node app listar --base 5 --limite 18
*/

/*
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);
*/