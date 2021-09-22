import React, { Component } from "react";
import Cockpit from "../Components/Cockpit/Cockpit";
import Persons from "../Components/Persons/Persons";

class App extends Component {
  constructor(props) {
    super(props)
    console.log("App.js Constructor");
    this.state = {
      persons: [
        { id: "one", name: "Aadil", age: 20 },
        { id: "two", name: "Shoiab", age: 18 },
        { id: "three", name: "Usman", age: 10 },
      ],
      showPerson: true,
    };
  }
  static getDerivedStateFromProps(props,state) {
    console.log("App.js getDerivedStateFromProps",props);
    return state;
  }
  // componentWillMount() {
  //   console.log("App.js ComponentWillMount");
  //   //there is no use of this method here now
  // }
  componentDidMount() {
    console.log("App.js componentDidMount");
  }
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((p)=> {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePerson = (personIndex) => {
    const person = [...this.state.persons]
    person.splice(personIndex,1);
    this.setState({
      persons: person
    })
  }

  render() {
    console.log("App.js render method");
    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>
          <Persons persons = {this.state.persons}
          clicked= {this.deletePerson}
          changed = {this.nameChangeHandler} />
          {/* {this.state.persons.map((person,index)=> {
            return (
              <Persons name = {person.name}
              age ={person.age}
              click = {()=> this.deletePerson(index)}
              changed = {(event)=> {this.nameChangeHandler(event,person.id)}}
              />
            )
          })} */}
        </div>
      )
    }
    return (
      <div className="App">
        <Cockpit appTitle={this.props.appTitle} color={"this.state.showPerson"} togglePerson = {this.togglePerson} />
        {persons}
      </div>
    )
  }
}

export default App;
