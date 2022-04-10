import React from "react";
import styled from "styled-components";
import { ThemeStyle } from "../../themes/Theme";

const Container = styled.div`
    position: absolute;
    top: 10vh;
    left: 5vw;

    ${props => ThemeStyle("font-family", props.theme.form.font_family)};
    ${props => ThemeStyle("font-size", props.theme.form.font_size)};

    ${props => ThemeStyle("color", props.theme.form.color)};
    ${props => ThemeStyle("background", props.theme.form.background)};

    ${props => ThemeStyle("border-radius", props.theme.form.border_radius)};
    ${props => ThemeStyle("border", props.theme.form.border)};

    ${props => ThemeStyle("margin", props.theme.form.margin)};
    ${props => ThemeStyle("padding", props.theme.form.padding)};

    height: calc(80vh - calc(${props => props.theme.form.padding } + ${props => props.theme.form.padding }));
    width: calc(90vw - calc(${props => props.theme.form.padding } + ${props => props.theme.form.padding }));
`;

const Header = styled.h1`
    margin: 0;
`;

export const ThemeContainer = (props) => (
    <Container>
       <Header>Themes</Header> 
    </Container>
);