import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      menuIsActive: false
    };
  }

  handleClick(event){
    this.setState({menuIsActive: !this.state.menuIsActive})
  }

  render() {
    return (
      <div>
        <Header 
          menuIsActive={this.state.menuIsActive}
          handleClick={this.handleClick}/>
        <Menu menuIsActive={this.state.menuIsActive}/>
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo optio nulla, ratione rem dolores incidunt enim vitae minima consequatur doloribus, officia dicta iusto non distinctio architecto unde odio, sed deleniti.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo optio nulla, ratione rem dolores incidunt enim vitae minima consequatur doloribus, officia dicta iusto non distinctio architecto unde odio, sed deleniti.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo optio nulla, ratione rem dolores incidunt enim vitae minima consequatur doloribus, officia dicta iusto non distinctio architecto unde odio, sed deleniti.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo optio nulla, ratione rem dolores incidunt enim vitae minima consequatur doloribus, officia dicta iusto non distinctio architecto unde odio, sed deleniti.</p>
        </div>
      </div>
    );
  }
}

export default App;
