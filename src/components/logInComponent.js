import React, { Component } from "react";
var ls = require('local-storage');

export default class Login extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            ingredient:{
                email:'',
                password:''  
            }                  
        }; 
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }


      handleChange(event) {
        const {name, value} = event.target;
        this.setState({ 
            ingredient: {
                ...this.state.ingredient,
                [name]: value
            } 
        });
    }

    handleSubmit(e){
        var val = this.state.ingredient;
        var user = JSON.parse(ls.get(JSON.stringify(val.email)));
        if (JSON.stringify(user.password) === JSON.stringify(val.password)){
                e.preventDefault();
                window.location = "/List";
        }
        else
            alert("Incorrect Email or Password!");
    }

    render() {
        return (
            <div >
            <form onSubmit={this.handleSubmit}>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input required='true' type="email" name='email' value={this.state.ingredient.name} onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input required='true' type="password" name='password' value={this.state.ingredient.name} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Not Registered yet! <a href="/SignUp">Sign Up?</a>
                </p>
            </form>
            </div>
            
        );
    }
}