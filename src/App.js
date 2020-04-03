import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Screens/Home'
import Gallery from './Screens/Gallery'
import Contact from './Screens/Contact'
import About from './Screens/About'
import Whatwedo from './Screens/Whatwedo'
import { CubeGrid } from 'styled-loaders-react'
import $ from 'jquery'



class App extends Component {

  componentDidMount = () => {
      setTimeout(function(){
        $('.loader_bg').fadeToggle();
      }, 5000);
  }


  render() {
    return(
      <div className="App">
                {/* <div className="loader_bg">
                <div className="loader"></div>
                <div className="loader-text">
                  <p style={{fontFamily: "'Lobster', cursive"}}>Kurious Tribe</p>
                </div>
          </div> */}
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route path="/Whatwedo" component={Whatwedo} />
      

          </Switch>
        </BrowserRouter>


  </div>
    );
  }
}

  

export default App;
