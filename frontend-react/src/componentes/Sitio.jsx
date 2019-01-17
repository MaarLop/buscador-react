import React from 'react';
import { Link } from 'react-router-dom';
import API from '../service/api.js';
import Header from './Header.jsx';

class Sitio extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          sitio:{
            pais:{
              name: '',
              id: ''
            } ,
            categotias: [],
          },
          error: ''
        }
    }

    componentDidMount(){
        (API.get(`/sitio/${this.props.match.params.id_sitio}/categorias`))
            .then(response => {
              this.setState({ sitio: response })          
            })
            .catch((error) => {      
                this.setState({ error: error })
            });
    }
    

    crear() {
        return (
          <div className="container">
            <div className="col-12">
                <div className="card text-white bg-dark mb-3">
                  <h3 align="center" className="card-body align-items-center d-flex justify-content-center"> Categorias</h3>
                </div>
                { this.crearCuadricula()}
            </div>
          </div>)
      }
      crearCuadricula(){
        return this.splitSitios(4, this.state.sitio.categorias).map((list, i) => (
          <div className="container">
            <div className="card-deck" key={`sitio_${i}`}>
              {list.map(categoria => this.createCard(categoria))}
            </div>
          </div>
        ));
      }
    
      createCard(categoria) {
        let number = categoria.id.slice(3, categoria.id.length+1)
        let categoriaId= this.state.sitio.pais.id+ number
        return ( 
              <div className="card text-white bg-dark mb-3"  align="center">
                <div className="card-body">
                    <h5 className="card-title"><Link to = {`/${this.state.sitio.pais.id}/${categoriaId}`} >{categoria.nombre}</Link>   </h5>
                  </div> 
                </div>  
              )
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
       return ( <div className="container">
        <Header />.
        <div className="container">
        {this.crear()}</div>
        </div>     )
  
    }
}

export default Sitio