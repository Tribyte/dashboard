import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themes/GlobalStyles";
import { Theme } from "../themes/Theme";
import { getLocal } from "../utils/storage";

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
                    <h1 onClick={() => setTheme(themes.test)}>TEST</h1>
                    <h1 onClick={() => setTheme(themes.default)}>TEST 2</h1>
                </ThemeProvider>
            }
        </>
    );
}

export default App;
