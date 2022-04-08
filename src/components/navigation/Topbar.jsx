import React from "react";
import styled from 'styled-components';
import { Button } from "./components/Button"

const Container = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: ${ props => props.theme.navigation.background};
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

export const Topbar = (props) => (
    <Container>
        <Left>
            { props.buttons.map(button => button.position === 0 && <Button key={button.id} value={button.value} svg={button.svg} click={button.click} />) }
        </Left>

        <Center>
            { props.buttons.map(button => button.position === 1 && <Button key={button.id} value={button.value} svg={button.svg} click={button.click} />) }
        </Center>

        <Right>
            { props.buttons.map(button => button.position === 2 && <Button key={button.id} value={button.value} svg={button.svg} click={button.click} />) }
        </Right>
    </Container>
);