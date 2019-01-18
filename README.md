# Trinomio-Buscador

##Backend:
El modelo y la API Rest se encuentran desarrolladas en JavaScript, con la metodologia TDD usando Mocha y Chai para dicho proceso de testing (en caso del modelo).

###Dependencias instaladas con node:
**__ - Mocha y Chai :__**
npm i mocha chai --save-dev
**__ - Request-promise:__**
npm i reques-promise
**__ - Request:__**
npm i request
**__ - Express:__**
npm i express


###Correr Test:
npm run test -s

###Levantar el servidor( desde la carpeta API que se encuentra dentro de Backend): 
node BuscadorServer.js

###URL del servidor:
http://localhost:5000/api

###Posibles endpoint: 
*http://localhost:5000/api/sitio/{Id_SITIO}/categorias  (obtener categorias desitio especifico con su info basica en pais )
*http://localhost:5000/api/sitio/{Id_SITIO}/productos?id_categoria={Id_CATEGORIA} (obtener productos de categotia especifica )
*http://localhost:5000/api/sitios (obtener todos los sitios )


##Frontend:
Cuenta con 3 endpoint: 
 1. Para listar los sitios validos para Mercado Libre.
 2. Una vez elegido el sitio, se listaran las diferentes categrias que este tiene.
 3. Ya seleccionada la categoría, se mostraran los diferentes productos que se encuentran ella con su información mas relevante

###Dependencias instaladas con node:
**__ - React:__**
npm i react
**__ - Axios:__**
npm i -s axios
**__ - Router:__**
npm i react-router
**__ - Router dom :__**
npm i react-router-dom
**__ - Bootstrap:__**
ppm install --save react-bootstrap bootstrap@4

###Levantar servidor: 
Desde la carpeta frontend-react: npm start

###URL del servidor:
http://localhost:3000
