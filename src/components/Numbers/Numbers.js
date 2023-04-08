import React from "react";
import PropTypes from 'prop-types';

class Numbers extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num1: '',
            num2: '',
        }
    }
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: +value});
    }

    render(){
        return(
            <div>
                <form>
                    <input type="number" name="num1" value={this.state.num1} onChange={this.handleChange.bind(this)} />
                    <p>Number1 * 0.5 : {this.state.num1 * 0.5}</p><br/>
                    <input type="number" name="num2" value={this.state.num2} onChange={this.handleChange.bind(this)} />
                    <p>Number2 * 0.05 : {this.state.num2 * 0.05}</p><br/>

                </form>
            </div>
        )
    }
}

export default Numbers;