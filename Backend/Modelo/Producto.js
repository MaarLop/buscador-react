class Producto{
    constructor(_id, _titulo, _precio, _stock, _vendidos, _linkAMercadoLibre,
                _imagen, _mercadoPago, _localidad, _provincia){
                    this.id= _id
                    this.titulo= _titulo
                    this.precio= _precio
                    this.stock= _stock
                    this.vendidos= _vendidos
                    this.link= _linkAMercadoLibre
                    this.imagen= _imagen
                    this.mercadoPago= _mercadoPago
                    this.localidad= _localidad
                    this.provincia= _provincia
                }
    
}
module.exports=Producto