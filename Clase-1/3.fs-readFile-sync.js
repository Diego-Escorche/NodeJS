// Esto solo en los modulos nativos que no tengan promesas nativas.
// Sirve para convertir las callback en promesas normales.
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

//Ejemplo de async

const fs = require('node:fs')


console.log('Leyendo primer archivo...')
let text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto: ', text)

console.log('Perdiendo el tiempo...')

console.log('Leyendo segundo archivo...')
text = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo texto: ', text)

