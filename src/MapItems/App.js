import React, { Component } from 'react'
import StudentName from '.MapItems/StudentName';
import List from './MapItems/List';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    name: "sadha"
                },
                {
                    name: "shiva"
                },
                {
                    name: "pendem"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <StudentName />
                <ul>
                    {this.state.data.map((item) => <List data = {item} />)}
                </ul>
                
            </div>
        )
    }
}
