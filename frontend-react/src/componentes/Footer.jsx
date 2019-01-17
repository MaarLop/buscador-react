import React from 'react';
import { withRouter } from 'react-router';

class Footer extends React.Component{
  render() {
    return (
<footer class="container-fluid bg-4 text-center">
       <a href="" title="To Top">
            <span class="glyphicon glyphicon-chevron-up"></span>
       </a>
       <p>Susana Mariel Lopez </p>
      <p><span class="glyphicon glyphicon-map-marker"></span> Quilmes, AR</p>
      <p><span class="glyphicon glyphicon-phone"></span> 011 156-591-0107</p>
      <p><span class="glyphicon glyphicon-envelope"></span> s.mariel.lopez1995@gmail.com</p>
        </footer>
    );
  }
}

export default withRouter(Footer);


