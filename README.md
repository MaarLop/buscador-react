# Trinomio-Buscador

## Backend
El modelo y la API Rest se encuentran desarrolladas en JavaScript, con la metodologia TDD usando Mocha y Chai para dicho proceso de testing (en caso del modelo).

###Dependencias instaladas con node
-**_Moch a y Chai _**
npm i mocha chai --save-dev
-**_Request-promise_**
npm i reques-promise
-**_Request_**
npm i request
-**_Express_**
npm i express


### Correr Test
npm run test -s

### Levantar el servidor( desde la carpeta API que se encuentra dentro de Backend)
node BuscadorServer.js

### URL del servidor
http://localhost:5000/api

###Posibles endpoint 
-http://localhost:5000/api/sitio/{Id_SITIO}/categorias  (obtener categorias desitio especifico con su info basica en pais )
-http://localhost:5000/api/sitio/{Id_SITIO}/productos?id_categoria={Id_CATEGORIA} (obtener productos de categotia especifica )
-http://localhost:5000/api/sitios (obtener todos los sitios )


## Frontend:
Cuenta con 3 endpoint
 1. Para listar los sitios validos para Mercado Libre.
 2. Una vez elegido el sitio, se listaran las diferentes categrias que este tiene.
 3. Ya seleccionada la categoría, se mostraran los diferentes productos que se encuentran ella con su información mas relevante.

### Dependencias instaladas con node
-**_React_**
npm i react
-**_Axios_**
npm i -s axios
-**_Router_**
npm i react-router
-**_Router dom_**
npm i react-router-dom
-**_Bootstrap_**
npm install --save react-bootstrap bootstrap@4

### Levantar servidor
Desde la carpeta frontend-react: npm start

### URL
http://localhost:3000
