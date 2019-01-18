//mercadolibremod es al que se recurre cuando necesitamos hacer pedidos a la pagina de mercado libre
const mercadolibremod= require('./MercadoLibreClient')
const categoria= require('./Categoria')
const sitio = require('./Sitio')

class Buscador{
    constructor (){
       this.categorias= []
       this.filtroPaises= ''
       this.filtroCategoria= ''
       this.sitios= this.obtenerSitios()
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
                then((_responseCategorias) => {
                    this.agregarCategorias(_responseCategorias)
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

    sitioSeleccionado(){
       let sitioEncontrado = this.sitios.find((sitio)=>{
                return sitio.id === this.filtroPaises
        })
            return sitioEncontrado
    }

    agregarCategorias(_listCategorias){
        const categoriasAIterar= _listCategorias
        
        categoriasAIterar.forEach((_categoria)=>{
            let categoriaRes= new categoria(_categoria.id, _categoria.name)
             this.categorias.push(categoriaRes)
        })
    }
    
    obtenerProductosRequeridos(){
        try{
            this.encontrarCategoria()
            
            if (this.categoriaSeleccionada !== null){
                return this.categoriaSeleccionada.obtenerProductos(this.filtroPaises)
                .then(()=>{
                    return this.categoriaSeleccionada.productos
                })
                .catch((err)=>{
                    throw err
                })
            }
            else 
            {
                throw new Error ('Algo fallo')
            }
        }
        catch(er){
            throw (er)
        }
    }

    encontrarCategoria(){
        this.categoriaSeleccionada= this.categorias.find((_categoria)=>{
            return (_categoria.id === this.filtroCategoria)
        })
    }
    
    obtenerSitios(){
        let cliente= new mercadolibremod ()
        return cliente.obtenerSitioValidos().then((_sitios)=>{
                    this.sitios= this.agregarSitios(_sitios)
                    return this.sitios
                })
                .catch((error)=>{
                    throw error
                })
    }

    agregarSitios(_listaDeSitios){
        let _sitios= []
        _listaDeSitios.forEach((_sitio)=>{
            let sitioRes= new sitio( _sitio.id, _sitio.name)
                _sitios.push(sitioRes)
            })
        return _sitios
    }

}

module.exports = Buscador,categoria;
