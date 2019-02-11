import React, { Component } from 'react';
import Link from '../components/Link';

class Menu extends Component {
  render() {
    let menuItems = ['Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'];

    const active = this.props.menuIsActive;    


    return (
      <div className = {"menu" + (active ? " mn--active" : "")}>
        {menuItems.map((v,i) => {
          return <div key={i}><Link label={v}/></div>
        })}
      </div>
    );
  }
}

export default Menu;