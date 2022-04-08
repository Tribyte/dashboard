import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Button } from "./components/Button";

const Container = styled.div`
    width: 80px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: ${ props => props.theme.navigation.background};
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
`;

export const Sidebar = (props) => (
    <Container>
        <Top>
            { props.buttons.map(button => button.position === 0 && <Button key={button.id} value={button.value} svg={button.svg} click={button.click} />) }
        </Top>

        <Center>
            { props.buttons.map(button => button.position === 1 && <Button key={button.id} value={button.value} svg={button.svg} click={button.click} />) }
        </Center>

        <Bottom>
            { props.buttons.map(button => button.position === 2 && <Button key={button.id} value={button.value} svg={button.svg} click={button.click} />) }
        </Bottom> 
    </Container>
);