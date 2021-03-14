import React, {Component} from 'react';

export default class Navbar extends Component{
  render(){
    return(
<nav className="navbar" style={{backgroundColor:'#343434', color:'white', fontSize:"8em"}}>
  <a className="navbar-brand">SoundCream</a>
</nav>
    );
  }
};
