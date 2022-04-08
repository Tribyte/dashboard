import React from "react";
import styled from "styled-components";
import { ThemeStyle } from "../../themes/Theme";


const Container = styled.div`
    width:  ${ props => props.width  }
    height: ${ props => props.height }
`;

export const Card = (props) => (
    <Container>
    </Container>
);