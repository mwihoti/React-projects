import React, { Component } from 'react'

class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} am using props from {this.props.place}</h1>
      </div>
    )
  }
}

export default Classprops
