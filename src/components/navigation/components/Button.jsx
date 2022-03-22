import React from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor:  pointer;
    width:   ${ props => props.svg && props.theme.navigation.components.button.svg.width   };
    fill:    ${ props => props.svg && props.theme.navigation.components.button.svg.fill    };
    stroke:  ${ props => props.svg && props.theme.navigation.components.button.svg.stroke  };
    padding: ${ props => props.svg && props.theme.navigation.components.button.svg.padding };
`;

export const Button = (props) => (
    <Container onClick={props.click && props.click} svg={props.svg}>
       { props.value }
    </Container>
);