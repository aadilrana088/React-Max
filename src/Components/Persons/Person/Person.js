import React from 'react'
const Person = (props)=> {
    console.log("Person.js rendering...");
    return (
        <div>
            <h1 onClick={props.click}>I am {props.name} and I am {props.age} year old</h1>
            <input type="text" onChange={props.changed} value={props.value} />
        </div>
    )
}
export default Person