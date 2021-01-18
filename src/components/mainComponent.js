import React,{Component} from 'react';
import SignUp from "./signUpComponent";
import LogIn from "./logInComponent";
import List from "./listComponent";
import {connect} from 'react-redux';
import {fetchTodos, postTodo, deleteTodo, putTodo} from '../redux/actionCreators';

import {
    withRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

const mapStateToProps = state => {
    return {
      todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => { dispatch(fetchTodos())},
    postTodo: (name, description) => dispatch(postTodo(name, description)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    putTodo: (todoId, name, description) => dispatch(putTodo(todoId, name, description))
});

class Main extends Component{

    render(){
        const ListCall = ({match}) => {
            this.props.fetchTodos();
            return(
              <List todos={this.props.todos}
                postTodo={this.props.postComment}
                putTodo ={this.props.putTodo}
                deleteTodo ={this.props.deleteTodo}
                />
        )};
        return(
            <div>
                <Switch>
                    <Route exact path='/SignUp' component = {() => <SignUp />}/>
                    <Route exact path='/' component = {() => <LogIn />}/>
                    <Route exact path='/List' component = {ListCall}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));