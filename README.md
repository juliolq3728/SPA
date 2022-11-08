# SPA
REQUERIMIENTOS:
-NODE JS
-REACT JS
-GIT


#Primeros pasos.
1.-Tener Instalado Git en el Ordenador (https://git-scm.com/downloads)

2.-validar que ah sido instalado correctamente, abriendo una nueva termina y escribiendo el codigo git --version


![alt text](https://github.com/juliolq3728/SPA/blob/main/images/gitversion.png)


3.-Elegir la ubicacion donde clonara el repositorio SPA.
En este caso sera en el escritorio dentro de mi carpeta (PRUEBA GIT) con el comando git clone https://github.com/juliolq3728/SPA

![alt text](https://github.com/juliolq3728/SPA/blob/main/images/gitclone.png)

4.-Eliminaremos las dependencies y devDependencies del archivo (package.json)

![alt text](https://github.com/juliolq3728/SPA/blob/main/images/eliminardependencias.png)

quedaria d ela siguiente manera:

![alt text](https://github.com/juliolq3728/SPA/blob/main/images/sindepen.png)

lo siguiente es instalar de nuevo las dependencias:

npm i @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import @babel/preset-env @babel/preset-react express mongoose morgan react-icons 

npm i @babel/cli @babel/core @babel/node babel-loader babel-preset-env babel-preset-react css-loader dotenv nodemon react react-dom reactjs-popup style-loader webpack webpack-cli -D

#!!!NOTA!!!-> SE TIENE QUE ABRIR UNA NUEVA TERMINAL EN LA RAIS DE NUECTRA CARPETA SPA PARA INTRODUCIR LOS CONDIGOS ANTES MENCIONADOS.

5.-Como veran, nuevamente se tienen las dependencias en el archivo package.json y un a nueva carpeta node_modules. de esta manera evitaremos cualquier tipo de problema al ejecutar nuestra aplicacion

6.- Corre nuestra aplicacion con el comando (npm run dev) que colocaremos en la terminal.

al ejecutar el comando se tendra que ver de esta manera:

![alt text](https://github.com/juliolq3728/SPA/blob/main/images/fin.png)

7.- ingresar al servidor local con el puerto elegido o el que aparece en la leyenda de la terminal.

![alt text](https://github.com/juliolq3728/SPA/blob/main/images/URL.png)

8.- Si todo sale correcatmente se tendria que ver de la siguiente manera

![alt text](https://github.com/juliolq3728/SPA/blob/main/images/final.png)

#!!NOTA!!-> ESPERAR A QUE SALGA LA LEYENDA 
"Server on port 3000
connected to Atlas"
COMO SE OBSERVA EN LA IMAGEN.

#POSIBLES PROBLEMAS

Puerto ocupado.


![alt text](https://github.com/juliolq3728/SPA/blob/main/images/errorpuerto.png)

Solucion!-> dirigirse al archivo .env y cambiar a otro puerto que no este ocupado

![alt text](https://github.com/juliolq3728/SPA/blob/main/images/solucion.png)

EN CASO DE ALGUN OTRO ERRRO FAVOR DE CONTACTAR AL DESARROLLADOR ENCARGADO.

CONTACTO:

Correo: juliolq37@gmail.com
Telefono: 4426607343






