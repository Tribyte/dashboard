import React from "react"
import styled from "styled-components";

const Container = styled.input`
    color: #fff;
    width: 10em;
    border-radius: 10px;
    border: 2px solid #fff;
    background-color: transparent;
    padding: 5px 10px;
    margin: 20px;
    font-size: 1.5em;

    :focus { outline: none; }
`;

export const Input = (props) => (
    <Container />
);