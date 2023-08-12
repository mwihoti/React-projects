import React, { Component } from 'react';
import RegularComp from './Regularcomp';
import PureComp from './Purecomp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "learning"
      };
    }
    componentDidMount() {
        setInterval(()=>{this.setState({
            name: " learning"
        });}, 3000);
    }
    
  render() 
  
  {
    console.log('parent');
    return (
      <div>
        PARENT COMP <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/>

      </div>
    )
  }
}

export default ParentComp;
