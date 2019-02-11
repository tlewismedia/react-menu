import React, { Component } from 'react';

class Header extends Component {
  render() {
    const active = this.props.menuIsActive;

    return (
      <header>
        
        <button 
          className   = {"btn btn-primary " + (active ? 'active' : '')}
          onClick     = {this.props.handleClick}
        >
          MENU
        </button>
        
        <h1>Menu Demo</h1>
        
        <div></div>
      </header>
    );
  }
}

export default Header;