
import * as ThemeDefault from "./json/default.json";
import * as Test from "./json/test.json";

export const AllThemes = () => {
    const allThemes = [
        ThemeDefault,
        Test
    ];

    const themes = {"themes": {}};
    allThemes.forEach(theme => { 
        themes.themes[theme.default.theme.name] = theme.default.theme;
    })

    return themes;
}