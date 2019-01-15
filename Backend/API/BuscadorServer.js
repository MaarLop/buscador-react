const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const error=require('./APIError');
const port = process.env.PORT || 5000;
const rp = require('request-promise')
const buscadormod= require('../Modelo/Buscador')

const buscador= new buscadormod()

router.use(function(req, res, next) {
    console.log('Request received!');
    next();
});

app.get( '/', (req,res)=>{
        res.send('received');

})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
    if (err){
        throw new error.PedidoFallido()
    }
  });

app.use('/api', router);
// app.use(errorHandler);   


router.route('/sitio/:id_sitio').get (function (req,res){
    buscador.setearFiltro(req.params.id_sitio)
    buscador.obtenerResultados()
        .then(()=>{
            res.json(buscador.categorias)
        })
        .catch((error)=>{
                res.status(404)
                res.json(error)
            })
    })

    router.route('/sitio/:id_sitio/productos').get (function (req,res){
        buscador.setearFiltro(req.params.id_sitio)
        buscador.setearFiltroDeCategoria(req.query.id_categoria)
        buscador.obtenerResultados().then(()=>{
            buscador.obtenerProductosRequeridos().then((productos)=>{
                res.json(productos)
            })
        })
    

            
        })



// function errorHandler(err,req, res, next){
//     if (err instanceof error.APIError){
//         res.status(err.status);
//         res.json({status:err.status, errorCode: err.errorCode});
//     }
//     else{
//         console.log('Ups, algo fallo. Intente nuevamente más tarde')
//         res.status(500);
//         res.json({status:500,errorCode:'Ups, algo fallo. Intente nuevamente más tarde'})
//     }
// }

router.use((req, res) => {
    res.status(404);
    res.json({status: 404, errorCode: 'RESOURCE_NOT_FOUND'});
});

// router.use(errorHandler);

app.listen(port);

console.log('Iniciando servidor en el pueto ' +port);