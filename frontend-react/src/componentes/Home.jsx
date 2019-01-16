import React from 'react';
import API from '../service/api';
import { Link } from 'react-router-dom';
import '../Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitios: [],
      error: ''
    };
  }

  componentDidMount() {
      (API.get(`/sitios`))
          .then(response => {
            this.setState({ sitios: response })            
          })
          .catch((error) => {      
              this.setState({ error: error })
          });
    }


    crear() {
      return (
        <div className="container">
          <div className="col-6">
              <div className="card text-white bg-dark mb-3">
                <h3 align="center" className="card-body align-items-center d-flex justify-content-center"> Paises</h3>
              </div>
              { this.crearCuadricula()}
          </div>
        </div>)
    }
    crearCuadricula(){
      return this.splitSitios(4, this.state.sitios).map((list, i) => (
        <div className="container">
          <div className="card-deck" key={`sitio_${i}`}>
            {list.map(sitio => this.createCard(sitio))}
          </div>
        </div>
      ));
    }
  
    createCard(sitio) {
      return ( 
            <div align="center"className="card text-white bg-dark mb-3">
              <div className="card-body">
              <Link to = {`/sitio/${sitio.id}`} >{sitio.name}</Link>    
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

  render() {
    return (
      // <main>
      //   <h1 align="center">Buscador</h1>
      //   {this.crear()}
      // </main>

      <div className="container">
        <div className="col-sm-12">
          <header>
            <h1 align="center"> Buscador </h1>
          </header>
          {this.crear()}
        </div>     
      </div>
    


    );
  }
}
export default Home;