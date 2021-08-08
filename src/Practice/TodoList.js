import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.items.map((item) => (
                    <li>{item}</li>
                ))}
            </div>
        );
    }
}
export default TodoList
