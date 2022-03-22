import React from "react";
import { Input as InputComponent } from "./Input";

export default {
    title: "Form",
    component: InputComponent,
};

const Template = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
Input.args = {};