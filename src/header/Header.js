import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

 class Header extends Component{
    render() {
      return (
        <div >
            <div className="headerLogo">
          IFIN
            </div>
              
              <div className="commonLinks">
                <HeaderLinksWithRouter/>
              </div>  
  
            
         </div> 
   
      );
    }
  
  }
  
  class HeaderLinks extends Component{
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    
  
    handleClick(e) {
      e.preventDefault();
      this.props.history.push('/help');
    }
    render(){
      return(
        <div>
              {/* <button onClick={this.handleClick}>Slot</button>
            <Link to="/help">Help</Link> */}
            <div className="headerLinks" >
                <button className="commonLinksButton" onClick={this.handleClick}>Slot</button>

              </div>
              <div className="headerLinks" >
              <button className="commonLinksButton" onClick={this.handleClick}>Forward</button>

              </div>
              <div className="headerLinks">
              <button className="commonLinksButton" onClick={this.handleClick}>Swap</button>


              </div>
              <div className="headerLinks">
              <button className="commonLinksButton" onClick={this.handleClick}>Binary</button>


              </div>
              <div className="headerLinks">
              <button className="commonLinksButton" onClick={this.handleClick}>Loan</button>

              </div>
             

        </div>
  
      );
        
      
    }
  }

  const HeaderLinksWithRouter = withRouter(HeaderLinks)
  

  export default Header;