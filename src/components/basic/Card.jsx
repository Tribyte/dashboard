import React from "react";
import styled from "styled-components";
import { ThemeStyle } from "../../themes/Theme";


const Container = styled.div`
    ${props => ThemeStyle("font-family", props.theme.card.font_family)};
    ${props => ThemeStyle("font-size", props.theme.card.font_size)};

    ${props => ThemeStyle("color", props.theme.card.color)};
    ${props => ThemeStyle("background", props.theme.card.background)};

    ${props => ThemeStyle("border-radius", props.theme.card.border_radius)};
    ${props => ThemeStyle("border", props.theme.card.border)};

    ${props => ThemeStyle("margin", props.theme.card.margin)};
`;

export const Card = (children) => (
    <Container>
        {children}
    </Container>
);