const mercadolibremod= require('./MercadoLibreClient')

class Buscador{
    constructor (){
       this.resultados= []
       this.filtro= ''
    }
    setearFiltro(_filtro){
        this.filtro= _filtro
    }

    obtenerResultados(){
        let client = new mercadolibremod();
        return client.getCategoriasPara(this.filtro).then((_responseCategoria) => {
          this.resultados= _responseCategoria
        })
    }
}

module.exports = Buscador;
