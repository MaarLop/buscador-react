const assert = require('chai').assert
const filtros = require('../Buscador')

describe('App', function (){
    it ( 'retorna hello', function (){
        assert.equal( filtros(), 'hello')
    })
})