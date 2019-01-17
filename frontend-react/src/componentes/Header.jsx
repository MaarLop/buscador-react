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
      
//       <div class="jumbotron">
//   <div class="container-fluid text-center">
//   <Link to ="/" ata-toggle="tooltip" title="Página principal"><h1>  Buscador</h1> </Link>
//   </div>
// </div>
      // <div className="navbar-brand" >
      //   <div className="container-fluid">
      //     
      //     <h1>Buscador</h1>
      //     
      //     </div>
      // </div>
<div className= "container"> 
      <nav className="navbar nabg-light bg-dark justify-content-between">
      <button type="button" className="navbar-brand btn btn-link" > <span className="oi oi-book" /> Buscador</button>
       </nav> </div>
    );
  }
}

export default withRouter(Header);


