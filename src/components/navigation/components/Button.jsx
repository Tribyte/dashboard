import React from "react";
import styled from "styled-components";
import { ThemeStyle } from "../../../themes/Theme";


const Container = styled.div`
    cursor:  pointer;
    ${props => ThemeStyle("font-family", props.theme.navigation.components.button.font_family)};

    ${props => ThemeStyle("background", props.theme.navigation.components.button.background)};
`;
//background: ${ props => props.theme.navigation.components.button.background };

const SVGContainer = styled.div`
    ${props => ThemeStyle("fill"  , props.theme.navigation.components.button.svg.fill  )};
    ${props => ThemeStyle("stroke", props.theme.navigation.components.button.svg.stroke)};

    width:   ${ props => props.theme.navigation.components.button.svg.width   };
    padding: ${ props => props.theme.navigation.components.button.svg.padding };
`;
    // fill:    ${ props => props.svg && props.theme.navigation.components.button.svg.fill    };
    // stroke:  ${ props => props.svg && props.theme.navigation.components.button.svg.stroke  };

export const Button = (props) => (
    <Container onClick={props.click && props.click} >
        { props.svg && <SVGContainer svg={props.svg}>
            { props.value }
        </SVGContainer> }

        { !props.svg && props.value }
    </Container>
);