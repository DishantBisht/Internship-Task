import React,{Component} from 'react';
import SignUp from "./signUpComponent";
import LogIn from "./logInComponent";
import List from "./listComponent";
import {connect} from 'react-redux';
import {fetchRows, postRow, deleteRow, putRow} from '../redux/actionCreators';

import {
    withRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";


  const mapStateToProps = state => {
    return {
      rows: state.rows
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchRows: () => { dispatch(fetchRows())},
    postRow: (name, description) => dispatch(postRow(name, description)),
    deleteRow: (rowId) => dispatch(deleteRow(rowId)),
    putRow: (rowId, name, description) => dispatch(putRow(rowId, name, description))
});

class Main extends Component{
    componentDidMount(){
        this.props.fetchRows();
    }

    render(){
        const ListCall = ({match}) => {
            
            return(
              <List rows={this.props.rows}
                postRow={this.props.postComment}
                putRow ={this.props.putRow}
                deleteRow ={this.props.deleteRow}
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