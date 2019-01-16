import React from 'react';
import { Link } from 'react-router-dom';
import API from '../service/api.js';
// import HeaderHome from './Header.jsx';

class Categoria extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            categoria : {
                id: '',
                nombre: '',
                productos: []
            },
            error: ''
        }
    }
    render(){
       return ( <div className="container">
        <div className="col-sm-12">
          <header>
            <h1 align="center"> Buscador </h1>
          </header>
        </div>     
      </div>)
  
    }
}

export default Categoria