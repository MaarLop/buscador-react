import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import API from '../service/api';
import Footer from './Footer'

class Categoria extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            productos: [],
            error: ''
        }
    }
        
    componentDidMount(){         
        fetch(`/api/sitio/${this.props.match.params.id_sitio}/${this.props.match.params.idcategoria}/productos`)
        .then(function(response){
            response.json().then((data) => {
                this.setState({productos: data})
                if (data ===[]){
                    this.setState({ error:  'No existe resultados para la busqueda' })
                }
            }); 
            }.bind(this))
            .catch((error) => {    
                this.setState({ error:  'No existe resultados para la busqueda' })
            });
    }
        
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.idcategoria !== prevProps.match.params.idcategoria) {
          API.get(`/api/sitio/${this.props.match.params.id_sitio}/${this.props.match.params.idcategoria}/productos`)
            .then(promisefilm => this.setState({ film: promisefilm, error: '' }))
        .catch((error) => this.setState({ error: error.response.data.error }));  
        }
      }
        
    crear() {
        return (
          <div className="container">
            <div className="col-12">
                <div className="card text-white bg-dark mb-3">
                  <h3 align="center" className="card-body align-items-center d-flex justify-content-center"> Productos</h3>
                </div>
                { this.crearCuadricula()}
            </div>
          </div>)
      }
      crearCuadricula(){
        if( this.state.productos.length> 0){
            return this.splitSitios(4, this.state.productos).map((list, i) => (
                <div className="card-deck" key={`sitio_${i}`}>
                    {list.map(producto => this.createCard(producto))}
                </div>))
        }  
      }
    
      createCard(producto) {
        return (
            <div class="col-sm-3">
                <div class="thumbnail">
                    <img  src={producto.imagen} alt=" " className="image"/>
                    <p><strong>{producto.titulo}</strong></p>
                    <p>${producto.precio}</p>
                        <div align="left">         
                            {producto.mercadoPago ? <span span class="label label-success">MercadoPago</span> : <span class="label label-danger">No MercadoPago</span>}
                        </div>
                        <a href={producto.link} class="btn btn-warning btn-block">Ver mas...</a>
                </div>
            </div>)
      }
    
      splitSitios(number, listSitios) {
        const numberOfRows = Math.ceil((listSitios ? listSitios.length : 0) / number);
        const splited = [];
        for (let i = 0; i < numberOfRows; i += 1) {
          splited.push(listSitios.slice(i * number, number * (i + 1)));
        }
        return splited;
      }
    render(){
        return ( 
        <div className="container">
            <Header />
            {this.crear()}
            <Footer/>
       </div> )
  
    }
}

export default Categoria