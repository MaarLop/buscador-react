//mercadolibremod es al que se recurre cuando necesitamos hacer pedidos a la pagina de mercado libre
const mercadolibremod= require('./MercadoLibreClient')
const categoria= require('./Categoria')

class Buscador{
    constructor (){
       this.categorias= []
       this.filtroPaises= ''
       this.filtroCategoria= ''
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
                    this.agregarCategorias(_responseCategoria)
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

    agregarCategorias(_listCategorias){
        const categoriasAIterar= _listCategorias
        
        categoriasAIterar.forEach((_categoria)=>{
            let categoriaRes= new categoria(_categoria.id, _categoria.name)
             this.categorias.push(categoriaRes)
        })
    }
    
    obtenerProductosRequeridos(){
        this.obtenerResultados()
            .then(()=>{
                let categoriaEncontrada= this.categorias.find((_categoria)=>{
                    return (_categoria.id === this.filtroCategoria)
                })
                return categoriaEncontrada.obtenerProductos(this.filtroPaises)
            })
            .catch(error =>{
                throw error
        })
    }
    categoriasToJSON(){
        let jsonCategorias= []
        this.categorias.forEach((_categotia)=>{
                let catRes= _categotia.toJSON()
                jsonCategorias.push(catRes)
        })
        return jsonCategorias
    }

}

module.exports = Buscador,categoria;
