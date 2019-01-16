import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      busqueda: ''
    };
    this.sitio = props.match.params.id_sitio;
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  goToHome() {
    this.props.history.push(`/`);
  }

 handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: `/${this.user}/search/${this.state.search}`,
      state: { text: this.state.search },
    });
  }

 createSearchSeleccion() {
  //   return (
  //     <div className="form-inline">
  //       <form onSubmit={this.handleSubmit}>
  //         <input
  //           className="form-control"
  //           placeholder="Search"
  //           type="text"
  //           onChange={event => this.handleChange(event)}
  //           />
  //         <button
  //           className="btn btn-info"
  //           type="submit"
  //           onClick={this.handleSubmit}
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Buscar"
  //           >
  //           <yt-icon className="style-scope ytd-searchbox">
  //             <svg
  //               viewBox="0 0 24 24"
  //               preserveAspectRatio="xMidYMid meet"
  //               focusable="false"
  //               style={{
  //               pointerevents: 'none', display: 'block', with: '30px', height: '25px',
  //             }}
  //               className="style-scope yt-icon"
  //               >
  //               <g className="style-scope yt-icon">
  //               <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" className="style-scope yt-icon" />
  //             </g>
  //             </svg>
  //           </yt-icon>
  //         </button>
  //       </form>
  //     </div>);
  }


  render() {
    return (
      <nav className="navbar bg-dark justify-content-between">
        <div className="container">
          <button type="button" className="navbar-brand btn btn-link"  onClick={() => this.goToHome()}>
          <h1>Buscador</h1>
          </button>
          {this.createSearchSeleccion()}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">

                </div>
              </div>
            </div>
          </div>
      </nav>
    );
  }
}

export default withRouter(Header);


