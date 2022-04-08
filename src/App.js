import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Theme } from "./themes/Theme";
import { getLocal } from "./utils/Storage";
import { Landing } from "./pages/Landing";

function App() {
    const themes = getLocal("all-themes").themes;
    const { theme, themeLoaded, setTheme } = Theme()
    const [ selectedTheme, setSelectedTheme ] = useState(theme)

    useEffect(() => {
        setSelectedTheme(theme);
    }, [theme]);

    return (
        <>
            {
                themeLoaded && <ThemeProvider theme={ selectedTheme }>
                    <GlobalStyles />
                    <Landing />
                </ThemeProvider>
            }
        </>
    );
}

export default App;
