const fs = require('node:fs')

fs.stat('content', (err, stats) => {
    
    //Relleno

}) // Para saber si un archivo existe
fs.readdir('.', (err, files) => { // En el callback el error suele estar de primero como recordatorio para tratarlo.
    if (err) {
        console.log(err)
        return
    }
    files.forEach(file => {
        console.log(file)
    })
})