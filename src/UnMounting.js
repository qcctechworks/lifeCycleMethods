import React, {Component} from 'react'
import ReactDOM from 'react-dom';

class LifeCycleComponent extends Component{
    constructor () {
        super();
        this.state = {
            counter: 0,
        }
    }
    _increment=()=> {
      this.setState({ 
        counter : this.state.counter + 1
      }) 
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.interval = setInterval(this._increment, 1000)
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
        ReactDOM.render(<LifeCycleComponent />, 
        document.getElementById('renderhere'));
      }
      unmount=()=>{
         ReactDOM.unmountComponentAtNode(document.getElementById('renderhere'));
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