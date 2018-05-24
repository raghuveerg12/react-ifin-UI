import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
//import { hashHistory } from 'react-router';
import Help from '../help/Help';
import './Header.css';

 class Header extends Component{
    render() {
      return (
        <div >
            <div className="headerLogo">
          IFIN
            </div>
              
              <div className="commonLinks">
                <HeaderLinks/>
              </div>  
  
              <div className="burgerMenuLinks"> 
                <BurgerMenu/>
              </div>
         </div> 
   
      );
    }
  
  }
  
  class HeaderLinks extends Component{
    constructor(props) {
      console.log(props)
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    
  
    handleClick(e) {

      e.preventDefault();
      this.props.hashHistory.push('/Help');
    }
    render(){
      return(
        <div>
         
              
               <button onClick={this.handleClick}>slot</button>
          
              <Route path="/Help" exact Component={Help} />
            
     
             
        </div>
  
      );
        
      
    }
  }
  
  class BurgerMenu extends Component {
  
    render() {
      return (
        <div className="burgerMenuAd">
          <div className="burgerMenu"></div>
          <div className="burgerMenu"></div>
          <div className="burgerMenu"></div>
  
         </div> 
   
      );
    }
  }

  export default Header;