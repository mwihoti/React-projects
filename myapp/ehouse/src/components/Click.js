import React, {Component} from 'react';
import UpdatedComp from './HighOrder';

export class Click extends Component {
    constructor(props) {
        super( props);

        this.state = {
            count: 0
        };
    }
    UpdateClick=()=>{
        this.setState({count: this.state.count + 1})
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onClick={this.UpdateClick} style={ {height: '40px', backgroundColor: "#DDDBCB"} }>{this.props.name}clicked{count} time</button>
            </div>
        );
    }
}
export default UpdatedComp(Click);