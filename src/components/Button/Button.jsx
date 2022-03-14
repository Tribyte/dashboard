import React from "react";
import styled from "styled-components";

const Container = styled.button`
    font-family: ${(props) => props.theme.font};
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.body};
`;

export const Button = () => (
    <Container>
        Button
    </Container>
);