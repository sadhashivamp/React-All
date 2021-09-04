import React, { Component } from 'react'

export default class List extends Component {
    
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {this.data.name}
                    </li>
                </ul>
            </div>
        )
    }
}
