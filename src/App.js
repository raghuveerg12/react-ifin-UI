import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route,Link} from 'react-router-dom';
import  Header from './header/Header';
import  LeftPane from './leftPane/LeftPane';
import  Rightpane from './rightPane/RightPane';
import  Test from './Test';



class App extends Component {
  
  render() {
    return (
    
        <div className="App">
      
             
              <div className="headerpane">

                  <Header/>
              </div>
              <div className="leftpane">

                    <LeftPane/>
              </div>
              <div className="rightpane">

                  <Rightpane/>
              </div>
             
          </div>
       
    );
  }
}








export default 
App;
