const url_base= "https://api.mercadolibre.com/sites/"
const rp = require('request-promise');

class MercadoLibreClient{

    constructor(){
        this.promiseCategorias= []
        this.promiseProductos= []
    }

    getCategoriasPara(id_pais){
        const _options = 
            {
                url: url_base+ id_pais+ '/categories',
                json: true,
            }
            return rp.get(_options).then( (_responseCategorias) =>{
                this.promiseCategorias= _responseCategorias
                return this.promiseCategorias
            })
            .catch ((error)=> {
                throw new Error('Id invalido')
            })
    }

    getProductosDe(id_pais, id_categoria){
        
        const _options= 
        {
            url: url_base+ id_pais+'/search?category='+id_categoria+'&official_store_id=all',
            json: true,
        }
            return rp.get(_options)
                .then( (_responseProductos) =>{
                    this.promiseProductos= _responseProductos
                    return this.promiseProductos
                })
                .catch ((error)=> {
                    throw new Error(error)
                })   
    }

    obtenerSitioValidos(){
        const _options= 
        {
            url: url_base,
            json: true
        }
        return rp.get(_options)
            .then( (sitios)=>{
                return sitios
            })
            .catch((error)=>{
                throw error
            })
    }
}
module.exports= MercadoLibreClient