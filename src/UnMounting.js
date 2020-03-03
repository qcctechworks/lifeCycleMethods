import React, {Component} from 'react'

class LifeCycleComponent extends Component{
    getInitialState(){
      console.clear();
      return { counter : 0 }
    }
    _increment=()=> {
      this.setState({ 
        counter : this.state.counter + 1
      }) 
    }
    componentWillMount(){
        console.log('componentWillMount')
        this.interval = setInterval(this._increment, 1000)
      }
      componentDidMount(){
       console.log('componentDidMount')
      }
      componentWillUnmount(){
        console.log('component is about to unmount');
        clearInterval(this.interval)
      }
    render(){
       console.log('component is rendered');
      return (<div>Hello from Likes component {this.state.counter}</div>)
    }
  }
  
  class LifeCycleContainer extends Component {
    
      mount=() =>{
        React.render(<LifeCycleComponent />, 
        document.getElementById('renderhere'));
      }
      unmount=()=>{
         React.unmountComponentAtNode(document.getElementById('renderhere'));
      }
      render(){
        
        return (
          <div>
          <button onClick={this.mount}>Mount</button>
          <button onClick={this.unmount}>Un Mount</button>
          <div id='renderhere'></div>
          </div>)
      }
       
  };

  export default LifeCycleContainer