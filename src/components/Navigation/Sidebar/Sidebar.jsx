import React from "react";
import styled from 'styled-components';
import { ReactComponent as Logo } from "../../../icons/logo-ico.svg";

const Container = styled.div`
    width: 80px;
    height: 100vh;
    background: ${(props) => props.theme.sidebar.background};
`;

const SVG = styled.div`
    fill: #fff;
    padding: 15px;
`

export const Sidebar = () => (
    <Container>
        <SVG>
            <Logo />
        </SVG>
    </Container>
);