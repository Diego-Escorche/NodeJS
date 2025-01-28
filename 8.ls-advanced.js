const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        if (err) {
            console.error('Error al leer el directorio: ', err)
            return
        }
    })
// En este caso se usa el metodo readdir para leer un directorio y mostrar los archivos que contiene.
// En la terminal se pone node 8.ls-advanced.js y el nombre de la carpeta que se quiere leer.