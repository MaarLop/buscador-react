# Trinomio-Buscador

Backend:
El modelo se encuentra desarrollado en JavaScript, con la metodologia TDD usando Mocha y Chai para dicho proceso de testing.
La API esta tambien hecha en JavaScript.

Dependencias instaladas con node:
Mocha y Chai : npm i mocha chai --save-dev
Request-promise: npm i reques-promise
Request: npm i request
Express: npm i express
Axios: npm i axios
Router: npm i react-router
Router dom : npm i react-router-dom
Bootstrap: npm install --save bootstrap

Correr Test: npm run test -s

Levantar el servidor( desde la carpeta API que se encuentra dentro de Backend): node BuscadorServer.js
URL del servidor: http://localhost:5000/api
Posibles endpoint: 
*http://localhost:5000/api/sitio/{Id_SITIO}/categorias  (obtener categorias desitio especifico con su info basica en pais )////////////
*http://localhost:5000/api/sitio/{Id_SITIO}/productos?id_categoria={Id_CATEGORIA} (obtener productos de categotia especifica )
*http://localhost:5000/api/sitios (obtener todos los sitios )

Frontend:
Levantar servidor: 
Desde la carpeta frontend-react: npm start
URL del servidor: http://localhost:3000 (ruta de Home)

Para poder ver los elementos de vista, se tienen que activar (en el navegador) un plugin para encabezados CORS (Access-Control-Allow-Origin). Una vez instalado y encendido, se podran ver los elementos traidos del backend al frontend



