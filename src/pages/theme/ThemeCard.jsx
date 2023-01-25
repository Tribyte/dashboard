import React from "react";
import styled from "styled-components";
import { ThemeStyle } from "../../themes/Theme";
import { Card } from "../../components/basic/Card";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.div`

`;

export const ThemeName = styled.h1`

`;

export const ThemeCard = (props) => (
    <Card>
        <Container>
            <Section>
                <ThemeName>{props.name}</ThemeName>
            </Section>
        </Container>
    </Card>
)