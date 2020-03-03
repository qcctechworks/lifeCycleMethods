import React, { Component } from 'react';
import LifeCycle2 from "./LifeCycle2";
import UnMounting from './UnMounting';


class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    }
    console.log("this is when the constructor is loaded");
  }

  componentDidMount () {
    console.log("This is when the componentDidMount method executed");
  }

  render () {
    console.log("this is when the render method executed")
    return (
      <div>
        <LifeCycle2 />
        <UnMounting />
      </div>
    );
  }
};

export default LifeCycle;