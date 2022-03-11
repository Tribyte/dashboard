export const setLocal = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getLocal = key => {
    const value = window.localStorage.getItem(key);
    if(value){ return JSON.parse(value); }
}