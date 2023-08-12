import React, { Component } from 'react';

import ParentComp from './Parentcomp';

export class PureComp extends Component {
  render() {
    return (
      <div>
        pure comp{this.props.name}
      </div>
    )
  }
}

export default PureComp;
