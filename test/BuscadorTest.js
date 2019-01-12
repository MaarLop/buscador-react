const assert = require('chai').assert
const buscadormod= require('../Buscador')

describe('Resultados de busqueda', function (){
    let buscador= null
    
    beforeEach(() => {
        buscador = new buscadormod();
      });

    it ( 'retorna 0 porque la lista de resultados esta vacia', function (){
        assert.equal( buscador.resultados.length, 0 )
    })

    it ('retorna un string vacio ya que al estar en estado inicial este no fue inicializado aun', function(){
        assert.equal(buscador.filtro, '')
    })
})