import React from "react";
import { Button as Component } from "./Button";
import { ReactComponent as Logo } from "../../../icons/logo-ico.svg";

export default {
    title: "Navigation/Components",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = {
    value: <Logo />,
    svg: true,
};