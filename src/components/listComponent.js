import React from 'react';
import {Card, CardTitle, CardImgOverlay, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderTodosItem({todo}){
	return(
		<div style={{height:'70%' }}>
            <Card >
                {todo.title}
            </Card>
        </div>
	);
}
const List = (props) => {
    const todos = props.todos.map((todo) => {
		return(
			<div className="col-12 col-sm-5 m-1" style={{width:"100px", height:"100px"}}>
		    	<RenderTodosItem todo={todo} />
		    </div>
			);
	});
		if (props.todos.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.todos.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.todos.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
		return(
			<div className="container">
				<div className="row">
					{todos}
				</div>
			</div>
			);
}


export default List;