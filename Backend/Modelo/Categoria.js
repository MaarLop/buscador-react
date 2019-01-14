const mercadolibremod = require('./MercadoLibreClient')

class Categoria {
    constructor(_id, _nombre){
        this.id= _id
        this.nombre= _nombre
        this.productos=[]
    }
    obtenerProductosRequeridos(){
        let client= new mercadolibremod()
        return client.getProductosDe(this.filtroPaises, this.filtroCategoria)
        .then((_productos)=>{
            this.productos= _productos.results
        })
        .catch((err)=>{
            throw err
        })
    }
}

module.exports= Categoria