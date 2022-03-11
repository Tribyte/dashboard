import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${ ({ theme}) => theme.font };
        
        color: ${ ({ theme }) => theme.colors.text };
        background: ${ ({ theme }) => theme.colors.body };
    }
`;