import React from "react";
import styled from "styled-components";

const DivWrap = styled.div `
    color: black;
    background-color: darkgrey;
    width: 30%;
    margin-left: 10%;
    border-radius: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Card = props => {
    // eslint-disable-next-line no-unused-expressions
    return(
    <DivWrap>
        <h2>Name: </h2>
        <p>Height: </p>
        <p>Eye Color:</p>
        <p>Birth Year:</p>
        <p>Hair Color:</p>
    </DivWrap>
    )
}
export default Card;