const mercadolibremod = require('./MercadoLibreClient')
const productomod = require('./Producto')

class Categoria {
    constructor(_id, _nombre){
        this.id= _id
        this.nombre= _nombre
        this.productos=[]
    }
    obtenerProductos(id_pais){
        let client= new mercadolibremod()
       return client.getProductosDe(id_pais,this.id)
        .then((_productos)=>{
            this.productos= this.agregarProductos(_productos.results)
            return this.productos
        })
        .catch((err)=>{
            throw err
        })
    }
    agregarProductos(_listProductos){
        _listProductos.forEach((producto)=>{
            let productoRes= new productomod(producto.id, producto.title, producto.price, producto.available_quantity,
                producto.sold_quantity, producto.permalink, producto.thumbnail, producto.accepts_mercadopago,
                producto.address.state_name, producto.address.city_name)
            this.productos.push(productoRes)
        })
    }
    toJSON(){
        let productosJSON= []
        // this.productos.forEach((producto)=>{
        //     productosJSON.push()
        // })
        return {id: this.id, nombre: this.name, productos: productosJSON}
    }
}

module.exports= Categoria