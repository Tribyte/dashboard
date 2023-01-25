import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    algin-items: center;

    width: 26em;
    height: 100vh;

    background: ${ props => props.theme.navigation.background };
`;

const Button = styled.span`
    display: flex;
    height: ${ props => props.theme.navigation.components.button.height };
    margin: 20px;
`;

const temp = () => console.log("test");

const buttons = [
    { id: 0, value: "test", draggable: false, click: temp },
];

export const CampaignsNavigation = (props) => (
    <Container className={ (props.expanded !== "")? "active" : "" }>
        {buttons.map(button => <Button key={button.id}>{button.value}</Button>) }
    </Container>
)