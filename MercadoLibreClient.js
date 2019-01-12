const url_base= "https://api.mercadolibre.com/sites/"
const rp = require('request-promise');

class MercadoLibreClient{

    constructor(){
        this.promiseCategorias= []
    }

    getCategoriasPara(id_pais){
        const _options = 
            {
                url: url_base+ id_pais+ '/categories',
                json: true,
            }
            return rp.get(_options).then( (_responseCategorias) =>{
                this.promiseCategorias= _responseCategorias
            })
            .then( ()=>{
                return this.promiseCategorias
            })
    }
}
module.exports= MercadoLibreClient