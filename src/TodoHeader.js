import React, { Component } from 'react';


class TodoHeader extends Component {
    render() {
        return (
            <form >
                <div className="form-group">
                    <input type="text" className="form-control" />
                </div>
            </form>
        );
    }
}
export default TodoHeader;