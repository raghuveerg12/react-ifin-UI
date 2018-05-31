import React, { Component } from 'react';
import MenuLinks from '../Burger';
import Header from '../header/Header';
import './Help.css';

const headerStyle = {
    position: 'relative',
    height: '180px',
    lineHeight: '180px',
    textAlign: 'center',
    backgroundColor: '#a9c056',
    border: 'solid 1px #a9c056'
};
const h1Style = {
  color: '#fff',
  fontSize: '1.25rem'
};

class Help extends Component {
    render() {
      return (
        <div className="App" id="outer-container" style={{height: '100%'}}>
          <MenuLinks />
         < Header/>
          
            <h1> How can we Help ?</h1>
             
          <div className="topnav">
            <input type="text" placeholder="Search.."/>  
          </div>
          <div >
              <h3>  FAQs</h3>
            </div>
            <div >
                <div className="helpTabs">
                   <h5> General</h5>
                </div> 
                <div className="helpTabs" >
                  <h5>Trading</h5>
                </div> 
                <div className="helpTabs">
                    <h5>Technical</h5>
                </div> 
                  
                   
                  
            </div>  
            <div >
                 <button className="buttonTicket">New ticket</button>
            </div> 
            <div >
                MyTickets
            </div> 
        </div>
      );
    }
  }

  export default Help;