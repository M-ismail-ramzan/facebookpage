import React, { Component } from 'react';

class HeaderForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.starting();
    }

    starting = () => ({
        data: {
            email: '',
            password: '',
        },
        error: {}
    });

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            error: {
                ...this.state.error,
                [e.target.name]: ""
            }
        });
    }

    checking = () => {
        const { data } = this.state;
        let error = {};

        if (data.email === '') error.email = 'Email can not be blank.';
        if (data.password === '') error.password = 'Not Valid Password';

        return error;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;

        const error = this.checking();

        if (Object.keys(error).length === 0) {
            console.log(data);
            this.setState(this.starting());
        } else {
            this.setState({ error });
        }
    }
        
    render() {
        const { data} = this.state;
        const{ error } =this.state;
        return (
            <form>
            <div className="display-input ml-5 mb-md-5">
            <label className="margin-email-header">Email</label>
            <input type="email" id="email" className="height-form-header" value={data.email} invalid={error.email ? true : false} name="email" onChange={this.handleChange} ></input>
            <p className="text-danger size-span">{error.email}</p>
            </div>

            <div className="display-input2 ml-3">
            <label className="margin-email-header">Password</label>
            <input type="password" id="password" className="height-form-header"value={data.password} type="password" name="password" invalid={error.password ? true : false} onChange={this.handleChange} ></input>
            <p className='text-danger size-span'>{error.password}</p>
            </div>
            <input onClick={this.handleSubmit} type="button" className="button-header" value="Log In"></input>
            
    </form>    
    
)
    }
}

export default HeaderForm
