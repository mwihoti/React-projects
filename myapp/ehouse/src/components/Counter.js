import React, { Component } from 'react';
import UpdatedComp from './HighOrder';

export class Counter extends Component {
    constructor (props){
        super(props)
        this.state = {
            count: 0
        };
    }
    IncrementCount = () => {
        this.setState({count: this.state.count +1});

    };
  render() {
    const {count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementCount} style ={{height: '40px', backgroundColor: 'grey'}}>{this.props.name}Incremented to {count}
        </button>
      </div>
    )
  }
}

export default UpdatedComp(Counter);
