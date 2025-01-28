const fs = require('node:fs') // Lo mas recomendado es poner node:${modulo}

// Ejemplo de sync
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size // Tamaño en bytes
)