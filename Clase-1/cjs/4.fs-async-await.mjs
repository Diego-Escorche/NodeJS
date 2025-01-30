// Con async await

import { readFile } from 'node:fs/promises'

console.log('Leyendo primer archivo...')

const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto: ', text)

console.log('Leyendo segundo archivo...')

const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto: ', text2)
