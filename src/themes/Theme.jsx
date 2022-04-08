import { useEffect, useState } from "react";
import { setLocal, getLocal } from "../utils/Storage";
import { ThemeTemplate } from "./Template";

import * as ThemeDefault from "./allThemes/default.json";
import * as Test from "./allThemes/test.json";

import _ from "lodash";

export const AllThemes = () => {
    const allThemes = [
        Test,
        ThemeDefault,
    ];

    const themes = {"themes": {}};
    allThemes.forEach(theme => { themes.themes[theme.default.theme.name] = ThemeTemplate(theme.default).theme; })
    return themes;
}

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

export function ThemeStyle(style, value){
    return !value? "" : style + ": " + value;
}