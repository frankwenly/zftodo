import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import 'bootstrap/dist/css/bootstrap.css';

class TodoApp extends Component {
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-md-offset-3 ">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader />
                            </div>
                            <div className="panel-body">
                                fsf
                            </div>
                            <div className="panel-footer">
                                fsdf
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default TodoApp;