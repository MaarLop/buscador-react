import React from 'react';
import { Link } from 'react-router-dom';
import API from '../service/api.js';
import Header from './Header.jsx';

class Sitio extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            sitio : {
                id: '',
                nombre: '',
                bandera: '',
                categorias: []
            },
            error: ''
        }
    }
    render(){
       return ( <div className="container">
        <Header />
        </div>     )
  
    }
}

export default Sitio