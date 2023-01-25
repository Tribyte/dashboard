import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ThemeStyle } from "../../themes/Theme";
import { Button } from "./components/Button"
import _ from "lodash";

const Container = styled.div`
    height: 80px;
    position: fixed;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${props => ThemeStyle("font-family", props.theme.card.font_family)};
    ${props => ThemeStyle("font-size", props.theme.card.font_size)};

    ${props => ThemeStyle("color", props.theme.card.color)};
    ${props => ThemeStyle("background", props.theme.card.background)};

    ${props => ThemeStyle("border-radius", props.theme.card.border_radius)};
    ${props => ThemeStyle("border", props.theme.card.border)};

    ${props => ThemeStyle("padding", props.theme.card.padding)};
    ${props => ThemeStyle("margin", props.theme.card.margin)};

`;

const Left = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
`;

const Center = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
`;

const ButtonLayout = (props, position, click) => (
    <>
        { _.filter(props.buttons, {"position": position}).map(button => (
            <Button
                key={button.id}
                value={button.value}
                svg={button.svg}
                click={() => click(button.id)}
            />
        )) }
    </>
)

export const Toptab = (props) => {
    const [tabBody, setTabBody] = useState(props.buttons[0].tabBody);

    console.log(props);
    const click = (id) => {
        setTabBody(_.find(props.buttons, {id: id}).tabBody);
    }

    return (
        <>
            <Container>
                <Left>{   ButtonLayout(props, 0, click) }</Left>
                <Center>{ ButtonLayout(props, 1, click) }</Center>
                <Right>{  ButtonLayout(props, 2, click) }</Right>
            </Container>

            {tabBody}
        </>
    )
};