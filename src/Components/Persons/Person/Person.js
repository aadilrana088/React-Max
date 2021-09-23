import React, { Component,Fragment } from "react";
import Aux from "../../Hoc/Aux";
class Person extends Component {
  render() {
    console.log("Person.js rendering...");
    // return [
    //         <h1 key="i1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old</h1>,
    //         <input key="i2" type="text" onChange={this.props.changed} value={this.props.value} />
    // ];
    return (
      <Aux>
        <h1 key="i1" onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} year old
        </h1>
        ,
        <input
          key="i2"
          type="text"
          onChange={this.props.changed}
          value={this.props.value}
        />
      </Aux>
    // <Fragment>
    //     <h1 key="i1" onClick={this.props.click}>
    //       I am {this.props.name} and I am {this.props.age} year old
    //     </h1>
    //     ,
    //     <input
    //       key="i2"
    //       type="text"
    //       onChange={this.props.changed}
    //       value={this.props.value}
    //     />
    // </Fragment>
    );
  }
}
export default Person;
