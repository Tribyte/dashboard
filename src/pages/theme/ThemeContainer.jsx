
import React from "react";
import styled from 'styled-components';
import { ThemeStyle } from "../../themes/Theme";
import { Toptab } from "../../components/navigation/Toptab";

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

export const Temp = styled.div`
    position: absolute;
    top: 300px;
    left: 20px;
    height: 100px;
    width: 100px;
    border-radius: 8px;
    border: 1px solid #fff;
`;

export const Tabs = [
    { position: 0, id: 0, value: "Theme Browser", tabBody: <Temp />},
    { position: 0, id: 0, value: "Theme Editor", tabBody: <Temp />},
];

export const ThemeContainer = (props) => (
    <Container>
        <Header>Themes</Header> 
        <Toptab buttons={Tabs} />
    </Container>
);