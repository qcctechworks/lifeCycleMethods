import React, {Component} from 'react';

class LifeCycleTwo extends React.Component {
    constructor() {
      super();
      this.state = {
        value: true,
        countOfClicks: 0
      };
      
    }
  
    pickRandom = () => {
      this.setState({
        value: Math.random() > 0.5, // randomly picks true or false
        countOfClicks: this.state.countOfClicks + 1
      });
    }
  
    // comment out the below to re-render on every click
    shouldComponentUpdate(nextProps, nextState) {
      return this.state.value != nextState.value;
    }
  
    render() {
      return (
        <div>
          shouldComponentUpdate demo 
          <p><b>{this.state.value.toString()}</b></p>
          <p>Count of clicks: <b>{this.state.countOfClicks}</b></p>
          <button onClick={this.pickRandom}>
            Click to randomly select: true or false
          </button>
        </div>
      );
    }
  }

  export default LifeCycleTwo