//Required
const fs = require('fs'); //PARA GRABAR EN UN ARCHIVO 




/* TABLA DE MULPLICAR DEL 2*/
let contenido = '';
let base = 2;

for (let i = 1; i <= 10; i++) {
    resultado = base * i;
    //console.log(`${base} * ${i} = ${resultado}`);
    contenido += `${base} * ${i} = ${resultado}\n`;
}

console.log(contenido);

/* 1)CREAR UN ARCHVIVO*/
fs.writeFile(`tabla${base}.txt`, contenido, (err) => {
    if (err) throw err;
    else console.log(`La tabla${base} fue creado`);
});
/* 1)CREAR UN ARCHVIVO*/






/* 3)COPIAR EL CONTENIDO DE UN ARCHIVO A OTRO*/
fs.copyFile('tala.txt', 'tabla.txt', (err) => {
    if (err) throw err;
    else console.log('El archivo fue reeemplazado correctamente');
});
/* 3)COPIAR EL CONTENIDO DE UN ARCHIVO A OTRO*/




/* 4)ELIMINAR UN ARCHIVO */
let archivoDelete = __dirname + '\\tala.txt';
console.log(archivoDelete);
fs.unlink('tabla.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('Se elimino el archivo');
});
/* 4)ELIMINAR UN ARCHIVO */