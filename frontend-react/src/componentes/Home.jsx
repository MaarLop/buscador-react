import React from 'react';
import API from '../service/api';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  dismissError() {
    this.setState({ error: '' });
  }

  render() {
    return (
      <div className="container">

        <div className="col-sm-12">
          <header>
            <h1 align="center"> BUSCADOR </h1>
          </header>
        </div>

        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-4" />
            <div className="col-4">
              <div className="navbar navbar-light bg-light">
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}
export default Home;