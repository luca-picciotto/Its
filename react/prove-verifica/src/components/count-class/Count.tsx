import React from 'react';
import CountProps from '../../assets/types/count/CountProps';
import CountState from '../../assets/types/count/CountState';

class Count extends React.Component<CountProps, CountState> {
    constructor(props: CountProps) {
        super(props);
        this.state = { count: this.props.count }
    }
    render(){
        return (
            <>
            <h2>Ciao {this.props.name}</h2>
                <button onClick={() => {this.setState({count: this.state.count + 1})}}>+</button>
                <button onClick={() => {this.setState({count: this.state.count - 1})}}>-</button>
                <p>{this.state.count}</p>
            </>
        )
    }
} 
export default Count;