class Buscador{
    constructor (){
       this.resultados= []
       this.filtro= ''
    }
    setearFiltro(_filtro){
        this.filtro= _filtro
    }
}

module.exports = Buscador;
