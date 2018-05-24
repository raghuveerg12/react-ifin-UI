import React, { Component } from 'react';


import "./LeftPane.css";

class LeftPane extends Component {
  
    render() {
      return (
        <div>
        <div id="listOfPricesAndChanges" className="listOfPricesAndChanges">
            <ListOfPricesAndChanges/>
        </div>
         <div id="priceAndDepth" className="priceAndDepth">
            <PriceAndDepth/>
        </div>
        <div id="ordersAndHistory" className="ordersAndHistory">
            <OrdersAndHistory/>
        </div>
  
         </div> 
   
      );
    }
  }

  
class ListOfPricesAndChanges extends Component {
  
    render() {
      return (
      <div>
        <div id="ethereumExchange" className="linksforPricesAndChanges etherenumHeading">
           <div > Ethereum Exchange</div>
           <div className="etherenumSubHeading"> ETH/BTC</div>
  
         </div>
         <div id="price" className="linksforPricesAndChanges priceChange ">
            <div >  Last Price</div>
           <div id="lastPrice" className="priceChangeSubHeading"> 0.000075</div>
         </div>
          <div id="change" className="linksforPricesAndChanges priceChange">
           
            <div >   24hr change</div>
           <div id="changePrice" className="priceChangeSubHeading"> 0.000075</div>
         </div>
         <div id="high" className="linksforPricesAndChanges priceChange">
            
             <div >   24hr High</div>
           <div id="highPrice" className="priceChangeSubHeading"> 0.000075</div>
         </div>
         <div id="low" className="linksforPricesAndChanges priceChange">
            
             <div >   24hr low</div>
         <div id="lowPrice" className="priceChangeSubHeading"> 0.000075</div>
           </div>
         <div id="volume" className="linksforPricesAndChanges priceChange">
           
        <div >    24hr volume</div>
           <div id="volumePrice" className="priceChangeSubHeading"> 0.000075</div>
         </div>
  
      </div>
      );
    }
  }
  
  class PriceAndDepth extends Component {
    state={
      showDivPrice:true,
      showDivDepth:false
    }
  switchPriceHandler= () =>{
  
      console.log('this was clicked!');
      this.setState({showDivPrice:true});
      this.setState({showDivDepth:false});
  
    }
  
    switchDepthHandler= () =>{
  
      console.log('this was clicked!');
      this.setState({showDivPrice:false});
      this.setState({showDivDepth:true});
     
    }
    
    render() {
       const styleForPrice={
  
        backgroundColor: '#ccc',
        cursor:'pointer'
        
        
       };
  
       const styleForDepth={
  
        backgroundColor: '#ccc',
        cursor:'pointer'
        
        
       };
       let priceDiv=null;
       let depthDiv=null;
       if(this.state.showDivPrice){
        priceDiv=(
          <div className="priceAndDepthBody">
              This is PriceDIV
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
              &nbsp; <br></br>
        
  
          </div>
  
        )
        
        styleForPrice.backgroundColor='white';
          
       
       }
  
       if(this.state.showDivDepth){
          depthDiv=(
            <div className="priceAndDepthBody">
                This is Dpeth
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
                &nbsp; <br></br>
          
    
            </div>
          )
          styleForDepth.backgroundColor='white';
        }
         
      return (
      <div>
        
        <div className="buttonsDiv">
          <button style={styleForPrice} className="PriceAndDepthButtons" onClick={this.switchPriceHandler} > Price </button>
          <button style={styleForDepth} className="PriceAndDepthButtons" onClick={this.switchDepthHandler}> Depth </button>
        </div>
        {priceDiv}
        {depthDiv}
        
          
      </div>
      );
    }
  }
  
  class OrdersAndHistory extends Component {
    
    render() {
      return (
      <div>
        <div id="orders" className="orders">
            <Orders/>
         </div> 
        <div id="history" className="history">
            <History/>
        </div>
  
      </div>
      );
    }
  }
  
  class Orders extends Component {
    state={
      value:[{Date:'18 April',type:'Buy',price:'12000',Amount:'10',Total:'10.00'}],
      showDivBuyOrder:true,
      showDivSellOrder:false,
      showDivMyOrder:false
  
    }
  
    switchBuyOrders= ()=>{
     
      this.setState({showDivBuyOrder:true});    
      this.setState({showDivSellOrder:false});
      this.setState({showDivMyOrder:false});
    }
    switchSellOrders= ()=>{
     
      this.setState({showDivBuyOrder:false});    
      this.setState({showDivSellOrder:true});
      this.setState({showDivMyOrder:false});
    }
  
    switchMyOrders= ()=>{
     
      this.setState({showDivBuyOrder:false});    
      this.setState({showDivSellOrder:false});
      this.setState({showDivMyOrder:true});
    }
  
  
  
    
    render() {
  
     const styleForBuyOrder={
        backgroundColor:'#ccc'
      }
      const styleForSellOrder={
        backgroundColor:'#ccc'
      }
      const styleForMyOrder={
        backgroundColor:'#ccc'
      }
      let buyOrderDiv=null;
      let sellOrderDiv=null;
      let myOrderDiv=null;
      if(this.state.showDivBuyOrder){
        buyOrderDiv=( 
        <div>
        <table>
          <tbody>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
            <td>{this.state.value[0].Date}</td>
            <td>{this.state.value[0].type}</td>
            <td>{this.state.value[0].price}</td>
            <td>{this.state.value[0].Amount}</td>
            <td>{this.state.value[0].Total}</td>
          </tr>
          </tbody>
        </table>
      </div>
      )
      styleForBuyOrder.backgroundColor='white'
      }
  
      if(this.state.showDivSellOrder){
        sellOrderDiv=( 
        <div>
        <table>
          <tbody>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
             <td>{this.state.value[0].Date}</td>
            <td>{this.state.value[0].type}</td>
            <td>{this.state.value[0].price}</td>
            <td>{this.state.value[0].Amount}</td>
            <td>{this.state.value[0].Total}</td>
          </tr>
          </tbody>
        </table>
      </div>
      )
      styleForSellOrder.backgroundColor='white'
      }
  
      if(this.state.showDivMyOrder){
       myOrderDiv=( 
        <div>
        <table>
          <tbody>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
          <td>{this.state.value[0].Date}</td>
            <td>{this.state.value[0].type}</td>
            <td>{this.state.value[0].price}</td>
            <td>{this.state.value[0].Amount}</td>
            <td>{this.state.value[0].Total}</td>
          </tr>
          </tbody>
        </table>
      </div>
      )
      styleForMyOrder.backgroundColor='white'
      }
  
      return (
      <div>
        <div>
            <button style={styleForBuyOrder} className="ordersButton" onClick={this.switchBuyOrders}>Buy Orders</button>
            <button style={styleForSellOrder} className="ordersButton" onClick={this.switchSellOrders}> Sell Orders</button>
            <button style={styleForMyOrder} className="ordersButton"onClick={this.switchMyOrders}> My Orders</button>
        </div>
       {buyOrderDiv}
       {sellOrderDiv}  
       {myOrderDiv} 
      </div>
      );
      
    }
  }
  
  
  class History extends Component {
  
    state={
      value:[{Date:'18 April',type:'Buy',price:'12000',Amount:'10',Total:'10.00'}],
      showDivTrade:true,
      showDivMarket:false,
  
    }
  
    switchTrade= ()=>{
     
      this.setState({showDivTrade:true});    
      this.setState({showDivMarket:false});
    }
    switchMarket= ()=>{
     
      this.setState({showDivTrade:false});    
      this.setState({showDivMarket:true});
    }
    
    render() {
      const styleForTrade={
        backgroundColor:'#ccc'
      }
      const styleForMarket={
        backgroundColor:'#ccc'
      }
  
      let tradeDiv=null;
      let marketDiv=null;
      if(this.state.showDivTrade){
        tradeDiv=( 
        <div>
        <table>
          <tbody>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
          <td>{this.state.value[0].Date}</td>
            <td>{this.state.value[0].type}</td>
            <td>{this.state.value[0].price}</td>
            <td>{this.state.value[0].Amount}</td>
            <td>{this.state.value[0].Total}</td>
          </tr>
          </tbody>
        </table>
      </div>
      )
      styleForTrade.backgroundColor='white'
      }
  
      
      if(this.state.showDivMarket){
        marketDiv=( 
        <div>
        <table>
          <tbody>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
          <td>{this.state.value[0].Date}</td>
            <td>{this.state.value[0].type}</td>
            <td>{this.state.value[0].price}</td>
            <td>{this.state.value[0].Amount}</td>
            <td>{this.state.value[0].Total}</td>
          </tr>
          </tbody>
        </table>
      </div>
      )
      styleForMarket.backgroundColor='white'
      }
      return (
      <div>
        <div>
            <button style={styleForTrade} className="historyButton" onClick={this.switchTrade}>Trade History</button>
            <button style={styleForMarket} className="historyButton"onClick={this.switchMarket}>Market History</button>
        </div>
        <div>
        {tradeDiv}
        {marketDiv}
        </div>
          
      </div>
      );
    }
  }
  
export default   LeftPane;