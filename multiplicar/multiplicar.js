const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`==Tabla de ${base}==`.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}\n`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} x ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}