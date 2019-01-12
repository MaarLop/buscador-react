const assert = require('chai').assert
const buscadormod= require('../Buscador')
const chai= require('chai')

describe('Resultados de busqueda', function (){
    let buscador= null
    
    beforeEach(() => {
        buscador = new buscadormod();
      });
   
    //TEST DE INICIALIZACION

    it ( 'Retorna 0 porque la lista de resultados esta vacia', function (){
        assert.equal( buscador.categorias.length, 0 )
    })

    it ('Retorna un string vacio ya que al estar en estado inicial este no fue inicializado aun', function(){
        assert.equal(buscador.filtroPaises, '')
    })

    it ('Retorna vacio el filtro de categorias ya que el de paises tambien lo esta', function(){
        assert.equal(buscador.filtroCategoria, '')
    })

    //TEST DE FILTRO DE CATEGORIAS POR PAISES

    it ('Retorna MLA al realizar la consulta despues de inicializar el filtro en dicho parameto', function(){
        buscador.setearFiltro('MLA')
        assert.equal(buscador.filtroPaises, 'MLA')
    })

    it( 'Retorna que la lista de resultados ya no es vacia al setearle el parametro MLA al filtro del buscador', function(){
        buscador.setearFiltro('MLA')
        return buscador.obtenerResultados().then ( function(r) {
            assert.notEqual(buscador.categorias, 0)
        })
    })

 
    // TEST DE FILTRO DE ARTICULOS DEPENDIENDO CATEGORIA Y PAIS

    it( 'Al setear un valor al campo de filtro de paises se puede setear el filtro de categorias', function(){
        buscador.setearFiltro('MLA')
        buscador.setearFiltroDeCategoria('MLA572')
        assert.equal(buscador.filtroCategoria, 'MLA572')
    })
    it('Al no setearse un valor en el campo de filtro de paieses no se seteara el valor al campo de filtro de categorias', function(){
        chai.expect(() => buscador.setearFiltroDeCategoria('MLA572')).to.throw('Ingrese Pais');
    })
})
