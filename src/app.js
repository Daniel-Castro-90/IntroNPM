// 1) Requerir express y path
const express = require('express');
const path = require('path');

// 2) Instanciar y configurar express
const app = express();

// 4) Guardamos el puerto en una variable
const port = 3000;

//Requerir path: nos ayuda a obtener la ruta abosluta del archivo.
// Es un módulo que proporciona utilidades para trabajar rutas de archivos y directorios, el método más utilizado es resolve();
// 5) Crear nuestra ruta: utilizamos .get() de express, en el primer parámetro va la ruta que queremos configurar y en el segundo parámetro recibe un callbackk con req y res.

app.get('/', (req, res) => {
    //__dirname: es una variable global de node.js que lee el directorio absoluto del script a ejecutar, en este acso apunta a donde tenemos alojado el archivo principal del servidor (app.js)
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
})

app.get('/tonystark', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/tonystark.html'))
})

app.get('/brucebarner', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/brucebarner.html'))
})

//6) Permitir que la carpeta public se pueda acceder. Vamos a usar el método static (de express) que hace que todo o que está dentro de la carpeta (en este caso public) se convierta en rutas.
app.use(express.static(path.resolve(__dirname, './public')));




// Inicio del servidor
// 3) Iniciar el servidor utilizado el método "listen" de express.
//Este método tiene como primer parámetro el puerto por donde escuchará el servidor, y segundo parámetro un callback que le daremos un console.log
app.listen(port, () => {
    console.log(`Servidor iniciado correctamente en: http://localhost:${port}`);
})
