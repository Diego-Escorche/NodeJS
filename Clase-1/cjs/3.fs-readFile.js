// Esto solo en los modulos nativos que no tengan promesas nativas.
// Sirve para convertir las callback en promesas normales.
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

//Ejemplo de async

const fs = require('node:fs')


console.log('Leyendo primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // ejecuta un callback
    console.log('primer texto: ', text)
}) // Toca ponerle la codificacion para que no de problema

console.log('Perdiendo el tiempo...')

console.log('Leyendo segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (error, text) => {
    console.log('segundo texto: ', text)
}) // Para poder usar el callback se debe hacer de manera asincrona

