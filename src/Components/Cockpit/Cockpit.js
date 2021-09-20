import React from "react";
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
  return (
    <div>
      <StyledButton alt={props.color} onClick={props.togglePerson}>
        Toggle Person
      </StyledButton>
    </div>
  );
};
export default Cockpit;
