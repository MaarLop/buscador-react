const mercadolibremod= require('./MercadoLibreClient')

class Buscador{
    constructor (){
       this.categorias= []
       this.filtroPaises= ''
       this.filtroCategoria= ''
    }
    setearFiltro(_filtro){
        this.filtroPaises= _filtro
    }

    obtenerResultados(){
        let client = new mercadolibremod();
        return client.getCategoriasPara(this.filtroPaises).then((_responseCategoria) => {
          this.categorias= _responseCategoria
        })
    }

    setearFiltroDeCategoria(_nombre_categoria){
        if (this.filtroPaises !== ''){
            this.filtroCategoria= _nombre_categoria
        }
        else{
            throw new Error ('Ingrese Pais')
        }
    }
}

module.exports = Buscador;
