import React from "react";
import styled from "styled-components";
import { ThemeStyle } from "../../themes/Theme";


const Container = styled.div`
    cursor:  pointer;
    ${(props, themeOverride) => {
        let theme = (typeof themeOverride !== 'undefined')? themeOverride : props.theme.navigation.components.button;
        console.log(themeOverride);
        let style = [];

        style.push(ThemeStyle("font-family", theme.font_family) + ";");
        style.push(ThemeStyle("background", theme.background) + ";");

        console.log(style);
        return style;
    }}
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
    <Container onClick={props.click && props.click} themeOverride={props.theme}>
        { props.svg && <SVGContainer svg={props.svg} themeOverride={props.theme}>
            { props.value }
        </SVGContainer> }

        { !props.svg && props.value }
    </Container>
);