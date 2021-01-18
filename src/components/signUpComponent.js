import React, { Component } from "react";
import {Card} from 'reactstrap';
var ls = require('local-storage');


export default class SignUp extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            ingredient:{
                firstname:'',
                lastname:'',
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

    handleSubmit(){
        var val = this.state.ingredient;
        ls.set(JSON.stringify(val.email), JSON.stringify(val));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action="/" style={{padding:"40px", height:'70%', width: '60 %'}}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input required='true' type="text" name='firstname' value={this.state.ingredient.name} onChange={this.handleChange} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input required='true' type="text" name='lastname' value={this.state.ingredient.name} onChange={this.handleChange} className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input required='true' type="email" name='email' value={this.state.ingredient.name} onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input required='true' type="password" name='password' value={this.state.ingredient.name} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">log in?</a>
                </p>
            </form>
        );
    }
}