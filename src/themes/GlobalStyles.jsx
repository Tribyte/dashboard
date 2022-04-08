import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: ${ ({ theme }) => theme.body_margin };
        padding: 0 !important;

        font-family: ${ ({ theme }) => theme.font_family };

        color: ${ ({ theme }) => theme.color };
        background: ${ ({ theme }) => theme.background };
    }

    #root {
        min-height: 100vh;
    }
`;