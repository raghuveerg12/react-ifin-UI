import React, { Component } from 'react';

import "./RightPane.css";

class RightPane extends Component {
  
    render() {
      return (
      <div>
        <div id="buyAndSell" className="buyAndSell">
            <BuyAndSell/>
        </div>
         <div id="markets" >
            <div className="markets"> <h5> Markets</h5> </div>
            
        </div>
        <div id="bTCNETH" className="bTCNETH">
            <BTCNETH/>
        </div>
          
      </div>
      );
    }
  }

  
class BuyAndSell extends Component {
    state={
      
      showDivMarket:true,
      showDivLimit:false,
      showDivStop:false
  
    }
  
    switchForMarket= () =>{
     
      this.setState({showDivMarket:true});    
      this.setState({showDivLimit:false});
      this.setState({showDivStop:false});
    }
    switchForLimit= ()=>{
     
      this.setState({showDivMarket:false});    
      this.setState({showDivLimit:true});
      this.setState({showDivStop:false});
    }
    switchForStop= () => {
     
      this.setState({showDivMarket:false});    
      this.setState({showDivLimit:false});
      this.setState({showDivStop:true});
    }
  
    
    render() {
  
      const styleForMarketBuyNSell={
        backgroundColor:'#ccc'
      }
      const styleForLimitBuyNSell={
        backgroundColor:'#ccc'
      }
  
      const styleForStopBuyNSell={
        backgroundColor:'#ccc'
      }
  
      let marketBuySellDiv=null;
      let limitBuySellDiv=null;
      let stopBuySellDiv=null;
      if(this.state.showDivMarket){
        marketBuySellDiv=( 
        <div>
         <div id="buy" className="buyNSellArea">
                <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
                <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
                <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
               
                <button className="buttonBuy">BUY</button>
            </div>
            <div id="sell" className="buyNSellArea">
                <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
                <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
                <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
               
  
                <button className="buttonSell">Sell</button>
            </div>
      </div>
      )
      styleForMarketBuyNSell.backgroundColor='white'
      }
      if(this.state.showDivLimit){
        limitBuySellDiv=( 
        <div>
         <div id="buy" className="buyNSellArea">
                <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
                <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
                <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
               
                <button className="buttonBuy">BUY</button>
            </div>
            <div id="sell" className="buyNSellArea">
                <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
                <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
                <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
               
  
                <button className="buttonSell">Sell</button>
            </div>
      </div>
      )
      styleForLimitBuyNSell.backgroundColor='white'
      }
      if(this.state.showDivStop){
        stopBuySellDiv=( 
        <div>
         <div id="buy" className="buyNSellArea">
                <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
                <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
                <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
               
                <button className="buttonBuy">BUY</button>
            </div>
            <div id="sell" className="buyNSellArea">
                <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
                <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
                <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
               
  
                <button className="buttonSell">Sell</button>
            </div>
      </div>
      )
      styleForStopBuyNSell.backgroundColor='white'
      }
  
      return (
     <div>
       
            <button style={styleForMarketBuyNSell} className="buyNSellTabs" onClick={this.switchForMarket}>Market</button>
            <button style={styleForLimitBuyNSell} className="buyNSellTabs" onClick={this.switchForLimit}>Limit</button>
            <button style={styleForStopBuyNSell} className="buyNSellTabs"onClick={this.switchForStop}>Stop</button>
       
       {marketBuySellDiv}
       {limitBuySellDiv}
       {stopBuySellDiv}
          
      </div>
      );
    }
  }
  
  
  class BTCNETH extends Component {
    state={
      value:[{Date:'18 April',type:'Buy',price:'12000',Amount:'10',Total:'10.00'}],
      showDivbtc:true,
      showDiveth:false,
      
  
    }
    switchForBtc= ()=>{
     
      this.setState({showDivbtc:true});    
      this.setState({showDiveth:false});
    }
    switchForEth= ()=>{
     
      this.setState({showDivbtc:false});    
      this.setState({showDiveth:true});
    }
    render() {
      const styleForBth={
        backgroundColor:'#ccc'
      }
      const styleForEth={
        backgroundColor:'#ccc'
      }
  
      let ethOrderDiv=null;
      let btcOrderDiv=null;
  
      if(this.state.showDivbtc){
        btcOrderDiv=( 
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
      styleForBth.backgroundColor='white'
      }
  
      if(this.state.showDiveth){
        ethOrderDiv=( 
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
      styleForEth.backgroundColor='white'
      }
      return (
     <div>
        <div>
            <button style={styleForBth} className="btcEthButton" onClick={this.switchForBtc}>BTC</button>
            <button style={styleForEth} className="btcEthButton"onClick={this.switchForEth}>ETH</button>
        </div>
        <div>
        {btcOrderDiv}
        {ethOrderDiv}
        
        </div>
          
      </div>
      );
    }
  }
  
  export default RightPane;