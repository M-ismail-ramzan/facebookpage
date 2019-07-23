import React, { Component } from 'react';
import "./BodyForm.css";


class BodyForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.starting();
    }

    starting = () => ({
        data: {
            firstName: "",
            lastName : "",
            email: '',
            password: '',
            confirm: ""
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

        if (data.firstName === '') error.firstName = 'Please Write Name';
        if (data.lastName === '') error.lastName = 'Please Write Last Name';
        if (data.email === '') error.email = 'Email can not be blank.';
        if (data.password === '') error.password = 'Password should be valid';
        if (data.confirm !== data.password) error.confirm = 'Password did not match';

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
        
               <h1 className="mt-4 full">Create An Account</h1>
               <h5>It's free and always will be</h5>
               <div className="form-row mt-4 form-width">
                   <div className="form-group col-md-6">
                     <input type="text" className="form-control" placeholder="Enter First Name"  id="firstname" name="firstName"  value={data.firstName} invalid={error.firstName ? true : false} onChange={this.handleChange} ></input>
                     <span className="text-danger">{error.firstName}</span>
                   </div>

                   <div className="form-group col-md-6">
                     <input type="text" className="form-control" placeholder="Enter Last Name"  id="lastname" name="lastName"  value={data.lastName} invalid={error.lastName ? true : false} onChange={this.handleChange} ></input>
                     <span className="text-danger">{error.lastName}</span>
                   </div>
                </div>

                    
                    <div className="form-group width-fix">
                        <input type="email" className="form-control" placeholder="Enter Email" name="email"  value={data.email} invalid={error.email ? true : false} onChange={this.handleChange}></input>
                        <span className="text-danger">{error.email}</span>
                    </div>

                    <div className="form-group width-fix">
                        <input type="password" className="form-control" placeholder="Enter New Password" name="password"  value={data.password} invalid={error.password ? true : false} onChange={this.handleChange}></input>
                        <span className="text-danger">{error.password}</span>
                    </div>

                    <div className="form-group width-fix">
                        <input type="password" className="form-control" placeholder=" Confirm Password" name="confirm"  value={data.confirm} invalid={error.confirm ? true : false} onChange={this.handleChange}></input>
                        <span className="text-danger">{error.confirm}</span>
                    </div>

                    <label for="inputState" className="label-birthday">Birthday</label>
                    <div className="form-group col-md-6 INLINE">
                         <select id="inputState" className="form-control">
                         <option selected>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                         <option>6</option>
                         <option>7</option>

                         
                        </select>
                    </div>
                    <div className="form-group col-md-6 INLINE">
                         <select id="inputState" class="form-control">
                         <option selected>Jan</option>
                         <option>Feb</option>
                         <option>Jan</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6 INLINE">
                         <select id="inputState" class="form-control">
                         <option selected>1994</option>
                         <option>2060</option>
                         <option>2010</option>
                         <option>2360</option>
                        </select>
                    </div>

                    <label for="inputState" className="label-birthday">Gender</label>
                        
                      <div class="form-check checkfix">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Male
                        </label>
                        </div>

                        <div class="form-check checkfix ml-4">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                         <label class="form-check-label" for="exampleRadios2">
                                Female
                         </label>
                        </div>

                        <p className="parafix mt-3">
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                        </p>




                    <input type="button" className="signbutton btn-success" onClick={this.handleSubmit} value="Sign Up"></input>

                    <p className="mt-4"><a href="#">Create a Page</a> for a celebrity, band or business.</p>
                 </form>   
            
        )
    }
}

export default BodyForm;
