class Producto{
    constructor(_id, _titulo, _precio, _stock, _vendidos, _linkAMercadoLibre,
                _imagen, _mercadoPago, _ciudad, _localidad){
                    this.id= _id
                    this.titulo= _titulo
                    this.precio= _precio
                    this.stock= _stock
                    this.vendidos= _vendidos
                    this.link= _linkAMercadoLibre
                    this.imagen= _imagen
                    this.mercadoPago= _mercadoPago
                    this.ciudad= _ciudad
                    this.localidad= _localidad
                }
}
module.exports=Producto