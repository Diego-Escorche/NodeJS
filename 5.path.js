// Rutas de los archivos
const path = require('node:path')

// unix -> /
// windows (El caso de mi OS)-> \ 

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt') // El OS no permite crear las rutas en un string, toca unirlas.
console.log(filePath)

const base = path.basename('/tmp/secret-files/password.txt') // Para obtener el nombre del archivo
console.log(base)

const filename = path.basename('/tmp/secret-files/password.txt', '.txt') // Para obtener el nombre del archivo sin la extension
console.log(filename)

const extension = path.extname('example.jpg') // Para obtener la extension del archivo
console.log(extension)