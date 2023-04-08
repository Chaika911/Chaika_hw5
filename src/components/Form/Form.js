import React from "react";

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            surName: '',
            age: '',
            message: '',
        }
    }

    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value})
    }
    handleSubmit(e){
        e.preventDefault();
        let message = JSON.stringify(this.state);
        this.setState({message: message})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} /><br /><br />
                    <input type="text" name="surName" value={this.state.surName} onChange={this.handleChange.bind(this)} /><br /><br />
                    <input type="number" name="age" value={this.state.age} onChange={this.handleChange.bind(this)} /><br /><br />

                    <button>submit</button><br /><br />
                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Form;