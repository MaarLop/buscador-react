const assert = require('chai').assert
const buscadormod= require('../Buscador')

describe('Resultados de busqueda', function (){
    let buscador= null
    
    beforeEach(() => {
        buscador = new buscadormod();
      });

    it ( 'Retorna 0 porque la lista de resultados esta vacia', function (){
        assert.equal( buscador.resultados.length, 0 )
    })

    it ('Retorna un string vacio ya que al estar en estado inicial este no fue inicializado aun', function(){
        assert.equal(buscador.filtro, '')
    })

    it ('Retorna MLA al realizar la consulta despues de inicializar el filtro en dicho parameto', function(){
        buscador.setearFiltro('MLA')
        assert.equal(buscador.filtro, 'MLA')
    })

    it( 'Retorna que la lista de resultados ya no es vacia al setearle el parametro MLA al filtro del buscador', function(){
        buscador.setearFiltro('MLA')
        return buscador.obtenerResultados().then ( function() {
            assert.notEqual(buscador.resultados, 0)
        })
    })
})
