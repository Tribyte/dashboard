import BaseTemplate from "./template/template.json";

const Defaults = {
    "padding": 0,
    "margin": 0,
    "body_margin": 0,
    "body_padding": 0,
    "height": 0,
    "width": 0,
    "fill": 0,
    "stroke": 0
};

function FormatTemplate(template, theme, defaults, defaultTemplate = null){
    let temp = defaults;
    for(let obj in template){
        if(typeof template[obj] === "object" && template[obj] !== null){
            let subTheme = (theme !== null && theme.hasOwnProperty(obj))? theme[obj] : null;
            FormatTemplate(template[obj], subTheme, temp, (!defaultTemplate)? defaultTemplate : defaultTemplate[obj]);
            continue;
        }

        if(theme !== null && theme.hasOwnProperty(obj) && typeof theme[obj] !== "object"){
            template[obj] = theme[obj];
            temp[obj] = theme[obj];
            continue;
        }

        if(temp.hasOwnProperty(obj)){
            template[obj] = temp[obj];
            continue;
        }

        if(defaultTemplate !== null && defaultTemplate.hasOwnProperty(obj)){
            template[obj] = defaultTemplate[obj];
        }
    }
}

export const ThemeTemplate = (theme) => {
    let tempTheme = JSON.parse(JSON.stringify(BaseTemplate));
    FormatTemplate(tempTheme, theme, Defaults);
    return tempTheme;
}