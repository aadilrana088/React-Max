import React, { Component } from 'react'
class Person extends Component {
    render() {
        console.log("Person.js rendering...");
        return (
            <div>
                <h1 onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old</h1>
                <input type="text" onChange={this.props.changed} value={this.props.value} />
            </div>
        )
    }
}
export default Person