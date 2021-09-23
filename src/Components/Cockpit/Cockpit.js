import React, {useEffect} from "react";
import styled from "styled-components";

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
const Cockpit = (props) => {
    useEffect(() => {
        console.log("UseEffect Log")
        //Http Request
        const timer = setTimeout(()=> {
            alert("Saved Data")
        },1000)
        return  () => {
            clearInterval(timer)
            console.log("Cleanup code for useEffect ");
        }
    }, [])
    useEffect(() => {
        console.log("UseEffect Log 2")
        return  () => {
            console.log("Cleanup code for useEffect 2");
        }
    }, [])
  return (
    <div>
        <h1>{props.appTitle}</h1>
      <StyledButton alt={props.color} onClick={props.togglePerson}>
        Toggle Person
      </StyledButton>
    </div>
  );
};
export default Cockpit;
