import * as BaseTemplate from "./template/template.json";
// debugger;
console.log(BaseTemplate.default);

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
    console.log("base", BaseTemplate.default);
    let tempTheme = BaseTemplate.default;
    console.log(tempTheme);
    FormatTemplate(tempTheme, theme, Defaults);
    console.log(tempTheme);
    return tempTheme;
}

/*
function FormatTemplate(template, theme, defaults, defaultTemplate = null){
    let temp = defaults;
    for(let obj in template){
        //console.log("here: " + obj + " type: " + typeof template[obj] + " val: " + template[obj]);
        if(!theme.hasOwnProperty(obj)){
            theme[obj] = template[obj];

            if(template[obj] === null){
                if(!temp.hasOwnProperty(obj) && (!defaultTemplate || !defaultTemplate.hasOwnProperty(obj))){ throw "Missing Theme value '" + obj + "'"; }
                theme[obj] = (!temp.hasOwnProperty(obj))? defaultTemplate[obj] : temp[obj];
                continue;
            }
        }
        
        if(typeof template[obj] === "object" && template[obj] !== null){
            FormatTemplate(template[obj], theme[obj], temp, (!defaultTemplate)? defaultTemplate : defaultTemplate[obj]);
            continue;
        }

        temp[obj] = theme[obj];
    }
}
*/