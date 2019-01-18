import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import API from '../service/api';
import Footer from './Footer'
const imagenDef = require('../sinImagen_opt.jpg')

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
                this.setState({productos: data, error: this.checkearData(data) })
            }); 
            }.bind(this))
            .catch((error) => { 
                this.setState({ error: error.errorCode })
            });
    }
        
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.idcategoria !== prevProps.match.params.idcategoria) {
          API.get(`/api/sitio/${this.props.match.params.id_sitio}/${this.props.match.params.idcategoria}/productos`)
            .then(promisefilm => this.setState({ film: promisefilm, error: '' }))
        .catch((error) => this.setState({ error: error.response.data.error }));  
        }
      }

      checkearData(data){
          if (data.length===0){
              return 'Aun no hay contenido para ver, intenta nuevamente más adelante'
          }
      }
        
    crear() {
        return (
          <div className="container">
            <div className="col-sm-10 col-md-10 col-lg-12 ">
                <div className="card text-white bg-dark mb-3">
                  <h3 align="center" className="card-body align-items-center d-flex justify-content-center"> Productos</h3>
                </div>
                { this.crearCuadricula()}
            </div>
          </div>)
      }
      crearCuadricula(){
        return this.splitSitios(4, this.state.productos).map((list, i) => (
            <div className="col-sm-10 col-md-10 col-lg-12 ">
                <div className="card-deck" key={`sitio_${i}`}>
                    {list.map(producto => this.createCard(producto))}
                </div>
            </div>))
        }  
    
      createCard(producto) {
        return (
            <div class="col-sm-3">
                <div class="card bg-light mb-3 max-width: 18rem">
                <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img  src={this.checkearImagen(producto.imagen)} alt=" " className="image"/>
                </div>
                <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <div class= "text-container">
                    <h3 class="t5 s-mb-2 s-center">
                        <p><strong>{producto.titulo}</strong></p>
                        <p>${producto.precio}</p>
                    </h3>
                    </div>
                </div>
                    <div class="s-mb-2 s-main-center">
                        <div class="card__teacher" align= "left">
                            <span span class="label label-success">{producto.mercadoPago ? 'MercadoPago' : 'No MercadoPago'}
                            </span>
                        </div>
                        <div class="s-main-center">
                            
                        </div>      
                    </div><a class="btn btn-warning btn-block" href={producto.link}>Ver más</a>
                </div>
            </div>) 
      }
    
      checkearImagen(imagen){
          console.log(imagen)
          if( imagen !==''){
              return imagen
          }
          else{
              return (imagenDef)
          }
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
            <h1>{this.state.error}</h1>
            <br/>
            
            <Footer/>
       </div> )
  
    }
}

export default Categoria