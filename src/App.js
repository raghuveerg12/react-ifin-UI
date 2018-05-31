import React, { Component } from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';
import  Header from './header/Header';
import  LeftPane from './leftPane/LeftPane';
import  Rightpane from './rightPane/RightPane';
import  Test from './Test';
import MenuLinks from './Burger';




class App extends Component {

  

  render() {
    return (
        <div className="App" id="outer-container" style={{height: '100%'}}>
            <MenuLinks />

            <main id="page-wrap">

                <div className="headerpane">
                    <Header />
                </div>
                <div className="leftpane">

                        <LeftPane/>
                </div>
                <div className="rightpane">

                    <Rightpane/>
                </div>
            </main>

        </div>

    );
  }
}


export default App;
