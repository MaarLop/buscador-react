import React from 'react';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}