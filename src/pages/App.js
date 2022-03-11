import React, { useState /*, useEffect */ } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themes/GlobalStyles";
import { Theme } from "../themes/Theme";

function App() {
    const { theme, themeLoaded } = Theme();
    const [selectedTheme /*, setSelectedTheme */ ] = useState(theme);

    //useEffect(() => { setSelectedTheme(theme); }, [themeLoaded]);

    return (
        <>
            {
                themeLoaded && <ThemeProvider theme={ selectedTheme }>
                    <GlobalStyles />
                </ThemeProvider>
            }
        </>
    );
}

export default App;
