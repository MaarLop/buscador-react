import React from 'react';
import { withRouter } from 'react-router';

class Footer extends React.Component{
  render() {
    return (
        <footer className="container-fluid bg-4 text-center">
               <a href="#" title="To Top">
                    <span className="glyphicon glyphicon-chevron-up"></span>
               </a>
               <p>Susana Mariel Lopez </p>
                <p><span className="glyphicon glyphicon-map-marker"></span> Quilmes, AR</p>
                <p><span className="glyphicon glyphicon-phone"></span> 011 156-591-0107</p>
                <p><span className="glyphicon glyphicon-envelope"></span> s.mariel.lopez1995@gmail.com</p>
        </footer>
    );
  }
}

export default withRouter(Footer);


