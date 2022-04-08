import React from "react";
import { Button as Component } from "./Button";
import { ReactComponent as Logo } from "../../icons/logo-ico.svg";

export default {
    title: "Basic",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = {
    value: "Value"
};

export const SVG_Button = Template.bind({});
SVG_Button.args = {
    value: <Logo />,
    svg: true,

    theme: {
        background: "brown",
        // font-family: "cursive"
    }
};