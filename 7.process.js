// Proporciona informacion y control sobre el proceso actual de ejecucion de Node.js.

// Ejemplo de uso de process.
console.log(process.argv) // Muestra los argumentos de entrada

// Current working directory
console.log(process.cwd()) // Muestra el directorio actual de trabajo

// platform
console.log(process.env.PEPITO) // Muestra la variable de entorno

// Controlar el proceso y su salida
process.exit(0) // Sale del proceso actual sin ningun error. 1 = Error, 0 = Correcto

// Controlar eventos del proceso
process.on('exit', () => {
  // Limpiar los recursos
})
