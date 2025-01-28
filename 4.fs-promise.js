// Con promesas

const fs = require('node:fs/promises')

console.log('Leyendo primer archivo...')
fs.readFile('./archivo1.txt', 'utf-8').then(text => {
    console.log('primer texto: ', text)
})

console.log('Leyendo segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8').then(text => {
    console.log('segundo texto: ', text)
})