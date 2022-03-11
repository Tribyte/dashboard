import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Container = styled.button`
    cursor: ${ props => props.theme.cursor };

    font-size: ${ props => props.theme.fontSize };
    font-family: ${ props => props.theme.fontFamily };
    font-weight: ${ props => props.theme.fontWeight };

    background-color: ${ props => props.theme.background };

    color: ${ props => props.theme.color };

    border: ${ props => props.theme.border };
    border-radius: ${ props => props.theme.borderRadius };
`;

export default class Button extends React.Component {
    defaultTheme = {
        cursor: "pointer",

        fontSize: "1.5em",
        fontFamily: "sans-serif",
        fontWeight: "400",

        background: "transparent",

        color: "#fff",

        border: "2px solid #fff",
        borderRadius: "10px"
    }

    render(){
        return (
            <ThemeProvider theme={this.props.theme? this.props.theme : this.defaultTheme }>
                <Container>
                    {this.props.value}
                </Container>
            </ThemeProvider>
        )
    }
}