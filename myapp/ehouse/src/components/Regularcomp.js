import React, { Component } from 'react'
import ParentComp from './Parentcomp';

export class RegularComp extends Component {
  render() {
    return (
      <div>
        Regularcomp{this.props.name}
      </div>
    )
  }
}

export default RegularComp;
