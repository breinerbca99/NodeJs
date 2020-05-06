//Required
const fs = require('fs'); //PARA GRABAR EN UN ARCHIVO 
var colors = require('colors');


let crearBase = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} : No es un numero`);
            return;
        }
        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            resultado = base * i;
            contenido += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`tabla${base}.txt`, contenido, (err) => {
            if (err) reject(err);
            else resolve(`La tabla${base} fue creado`);
        });

    });
}

let listarTabla = (base, limite) => {

    console.log('====================='.green);
    console.log('=======TABLA========='.green);
    console.log('====================='.green);


    if (!Number(base) || !Number(limite)) {
        console.log(`La base:${base} o el limite:${limite} : No es un numero`);
        return;
    }
    let resultado;
    let contenido = '';
    for (let i = 0; i < limite; i++) {
        resultado = base * i;
        contenido += `${base} * ${i} = ${resultado}\n`;
    }
    console.log(contenido)

}

module.exports = {
    crearBase,
    listarTabla
}