// Con async await

const { readFile } = require('node:fs/promises'); // El punto y coma es necesario en este caso.

// IIFE - Immediately Invoked Function Expression
(
    async () => {
        console.log('Leyendo primer archivo...')

        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto: ', text)

        console.log('Leyendo segundo archivo...')

        const text2 = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto: ', text2)
    }
)()


