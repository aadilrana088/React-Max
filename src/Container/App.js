import React, { Component } from "react";
import styled from "styled-components";
import Persons from "../Components/Persons/Persons";

const StyledButton = styled.button`
  background: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  fontsize: 20px;
  padding: 8px 15px;
  &:hover {
    background: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "one", name: "Aadil", age: 20 },
      { id: "two", name: "Shoiab", age: 18 },
      { id: "three", name: "Usman", age: 10 },
    ],
    showPerson: true,
  };

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
        <StyledButton alt={this.state.showPerson} onClick= {this.togglePerson}>
          Toggle Person
        </StyledButton>
        {persons}
      </div>
    )
  }
}

export default App;
