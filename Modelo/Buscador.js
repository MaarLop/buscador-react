//mercadolibremod es al que se recurre cuando necesitamos hacer pedidos a la pagina de mercado libre
const mercadolibremod= require('./MercadoLibreClient')

class Buscador{
    constructor (){
       this.categorias= []
       this.filtroPaises= ''
       this.filtroCategoria= ''
       this.productos= ''
    }

    //Setea el filtro de pais para proceder con la busqueda
    setearFiltro(_filtro){
        this.filtroPaises= _filtro
    }

    //Una vez seteado el valor de filtro de pais, este hace uso del cliente de mercado libre para obtener los resultados
    obtenerResultados(){
        if ( this.filtroPaises !== ''){
            let client = new mercadolibremod();
            return client.getCategoriasPara(this.filtroPaises).
                then((_responseCategoria) => {
                    this.categorias= _responseCategoria
                })
                .catch(err =>{
                    throw new Error('Id invalido')
                })
        }
        else{
            throw new Error('Ingrese Pais')
        }
        
    }

    //Si cuenta con el valor de filtro de pais, se podra cargar un valor a nombre de categoria, si no. lanzara una error
    setearFiltroDeCategoria(_nombre_categoria){
        if (this.filtroPaises !== ''){
            this.filtroCategoria= _nombre_categoria
        }
        else{
            throw new Error ('Ingrese Pais')
        }
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

module.exports = Buscador;
