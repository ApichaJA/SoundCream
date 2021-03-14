import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render(){
    return (
      <div className="container-fluid p-0">
      <Navbar/>
    </div>
  );
}
}

export default App;
