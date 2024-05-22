# PASOS PARA CREAR UN PROYECTO DE NODEJS DESDE CERO

## Primer Paso: Crear la carpeta y abrirla con VSC
Creamos la carpeta del proyecto y la abrimos con Visual Studio Code

## Segundo Paso: iniciar el proyecto
Abrimos la terminal, nos aseguramos de estar trabajando con bash.
Escribimos el comando: npm init -y
El '-y' es para que inicie el proyecto con todas las configuraciones por defecto, de lo contrario nos irá haciendo preguntas y será más personalizado.
Se creó el archivo packge.json

## Tercer Paso: instalar librerías de terceros: dependencias

npm install nombre-de-la-dependencia
npm i nombre-de-la-dependencia

nosotros vamos a comenzar instalando express: npm intall express


## Cuarto Paso: crear .gitignore
Creamos un archivo llamado .gitignore en la raíz del proyecto
Dentro del archivo escribimos node_modules


## Quinto Paso: instalar nodemon
Con nodemon podemos realizar modificaciones a nuestro proyecto y estas impactaran aunque este corriendo en desarrollo sin necesiadad de apagar o tirar el servidor.


## Sexto Paso: estructura de carpetas y archivos.
src: source, recursos

|_ node_modules
|_ src
    |_ app.js
    |_ public
        |_ css
            |_ styles.css
        |_ img
    |_ views
        |_ index.html
        |_ resto de html
    |_ js
|_ package.json
|_ package-lock.json
|_ .gitignore
|_ README.md


## Séptimo Paso: configurar el entry point (punto de entrada)
Primero es requerir, instanciar y configurar express.
Iniciar el servidor
Crear un script en package.json para poder levantar el servidor: "dev"
Cambiar el nombre del main en package.json

## Octavo Paso: configurar carpeta public y vistas
Las vistas (html) van en la carpeta views
los css/styles en carpeta css
imágenes en img
Todo según estructura de carpetas del paso 6.

Configurar la carpeta public
Crear rutas usando app.get()