class APIError extends Error {
    constructor( statusCode, errorCode, message = null) {
    super(message );
    this.status = statusCode;
    this.errorCode = errorCode;
    }
}
class PedidoFallido extends APIError{
    constructor(message=null){
        super(400, 'BAD_REQUEST');
    }
}
 class PedidoNoEncontrado extends APIError{
    constructor(message= null){
        super(404, 'RELATED_RESOURCE_NOT_FOUND');
    }
 }
class ProblemasInternosDeServidor extends APIError{
    constructor(message=null){
        super(500,'INTERNAL_SERVER_ERROR' );
    }
}

module.exports= {APIError,
    PedidoFallido,
    PedidoNoEncontrado,
    ProblemasInternosDeServidor
};
