import React, {Component} from 'react'
import Person from './Person/Person'
class Persons extends Component {
    // static getDerivedStateFromProps(props,state) {
    //     console.log("Persons.js getDerivedStateFromProps");
    //     return state
    // }
    shouldComponentUpdate(nextState,nextProps) {
        console.log("Persons.js shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,PrevState){
        console.log("Persons.js getSnapshotBeforeUpdate");
        return {message: "Snapshot"}
    }
    componentWillUnmount() {
        console.log("Clean code for class Component");
    }
    componentDidUpdate(prevProps,PrevState,snapShot) {
        console.log("Persons.js componentDidUpdate");
        console.log(snapShot)
    }
    render() {
        console.log("Persons.js rendering...");
        return (
            this.props.persons.map ((person,index) => {
                return <Person click={()=> this.props.clicked(index)}
                    name= {person.name}
                    age={person.age}
                    key={person.id}
                    changed ={(event)=> this.props.changed(event,person.id)}
                />
            })
        )
    }
}

export default Persons
