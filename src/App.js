import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Trangchu from './components/Trangchu.js';
import Home from './components/Home';
import Gioithieu from './components/Gioithieu';
import Lienhe from './components/Lienhe';
import Chiase from './components/cpnFeedBack/Chiase.js';
import Gopy from './components/cpnFeedBack/Gopy.js';
import Taitro from './components/cpnFeedBack/Taitro.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component{
  render(){
    return (
    <div>
      <Header></Header>
      <hr className="my-1" />
      <Router>
      <Switch>
          <Route path="/gioithieu">
            <Gioithieu></Gioithieu>
          </Route>
          <Route path="/lienhe">
            <Lienhe></Lienhe>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/trangchu">
            <Trangchu />
          </Route>
          <Route path="/chiase">
            <Chiase></Chiase>
          </Route>
          <Route path="/gopy">
            <Gopy></Gopy>
          </Route>
          <Route path="/taitro">
            <Taitro></Taitro>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      
    </div>
    );
  }
  }
export default App;
