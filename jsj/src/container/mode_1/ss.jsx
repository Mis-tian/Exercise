import React, { Component } from 'react';
import { render,findDOMNode,unstable_renderSubtreeIntoContainer,unmountComponentAtNode } from 'react-dom';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import TestUtils from 'react-dom/test-utils';
import Header from '../../component/header';

class A extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {v:1,z:2}
  }
  componentDidMount() {
    
  }
  
  render() {
    console.log(this.state,111000000002+'==111=11111111=33')
    return (
      <div>
       <Header text="Header-text"/>
       {this.state.v}
       <br/>
       <div>
       </div>111122222333s55555
        {this.state.z}
      </div>
    );
  }
}

export default A;