import React from "react";
import HomePage  from "./Pages/HomePage";
import SinglePage from "./Pages/SinglePage";

class App extends React.Component{

  constructor(props){
    super(props)
    this.konstanta = 0
    this.increaseCounter = this.increaseCounter.bind(this)
    this.povecajKonstantu = this.povecajKonstantu.bind(this)
    this.changePage = this.changePage.bind(this)
    this.state = {
      counter: 0,
      onHomePage: true
    }
  } 

  increaseCounter(){
    this.setState({
      counter: this.state.counter + 1
    })
  }  
  
  povecajKonstantu(){
    this.konstanta = 2
  }  

  changePage(){
    this.setState({
      onHomePage: !this.state.onHomePage
    })
  }
  
  render(){    
    
    return (
      <div>
        <button onClick={this.changePage}>Go to SINGLE/HOME</button>
        {this.state.onHomePage ? <HomePage/> : <SinglePage/>}
      </div>
    );
  }
}

export default App;