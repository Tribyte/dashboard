import React from "react";
import { Button as ButtonComponent } from "./Button";
import { ReactComponent as Logo } from "../../../icons/logo-ico.svg";

export default {
    title: "Navigation/Components",
    component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
    value: <Logo />,
    svg: true,
};