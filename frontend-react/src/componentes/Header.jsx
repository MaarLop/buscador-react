import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.sitio = props.match.params.id_sitio;
  }

  goToHome() {
    this.props.history.push(`/`);
  }



  render() {
    return (
    <div className= "container"> 
      <nav className="navbar nabg-light bg-dark justify-content-between">
      <button type="button" className="navbar-brand btn btn-link" onClic= {this.goToHome()}> <span className="oi oi-book" /> Buscador</button>
       </nav> </div>
    );
  }
}

export default withRouter(Header);


