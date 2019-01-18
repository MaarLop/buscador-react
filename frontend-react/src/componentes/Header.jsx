import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      error: ''
    }
    this.sitio = props.match.params.id_sitio;
  }

  goToHome() {
    this.props.history.push(`/`);
  }



  render() {
    return (
    <div className= "container"> 
      <nav className="navbar bg-dark justify-content-between" align= "center">
      <button type="button" className="btn btn-dark btn-justified"  onClick={() => this.goToHome()}>
          <h1 > Buscador</h1>
      </button>
       </nav> </div>
    );
  }
}

export default withRouter(Header);


