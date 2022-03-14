import { useEffect, useState } from "react";
import { setLocal, getLocal } from "../utils/storage";
import _ from "lodash";

export const Theme = () => {
    const themes = getLocal("all-themes").themes;
    const [theme, setStateTheme] = useState(themes.default);
    const [themeLoaded, setStateThemeLoaded] = useState(false);

    const setTheme = newTheme => {
        setLocal('theme', newTheme);
        setStateTheme(newTheme);
    }

    const getFonts = () => {
        const fonts = _.values(_.mapValues(themes, "font"));
        return fonts;
    }

    useEffect(() => {
        const localTheme = getLocal('theme');
        const themes = getLocal("all-themes").themes;
        localTheme ? setStateTheme(localTheme) : setStateTheme(themes.default);
        setStateThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setTheme, getFonts };
};

