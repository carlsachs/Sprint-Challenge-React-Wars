import React from "react";
import styled from "styled-components";

const DivWrap = styled.div `
    color: black;
    background-color: green;
    width: 30%;
    margin-left: 10%;
    border-radius: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 40px;
    h2 {
        color: blue;
    }
`;

const Card = props => {
    console.log(props)
    return(
    <DivWrap>
        <h2>Name: {props.data.name}</h2>
        <p>Height: {props.data.height}</p>
        <p>Eye Color: {props.data.eye_color}</p>
        <p>Birth Year: {props.data.birth_year}</p>
        <p>Hair Color: {props.data.hair_color}</p>
    </DivWrap>
    )
}
export default Card;