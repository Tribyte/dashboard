import React from "react";
import { Input as Component } from "./Input";

export default {
    title: "Components/Form",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Input = Template.bind({});
Input.args = {};