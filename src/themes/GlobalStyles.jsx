import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0 !important;

        font-family: ${ ({ theme}) => theme.font };

        color: ${ ({ theme }) => theme.colors.text };
        background: ${ ({ theme }) => theme.colors.body };
    }

    #root {
        min-height: 100vh;
    }
`;