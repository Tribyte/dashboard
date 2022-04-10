import React from "react";
import { ThemeContainer as Component } from "./ThemeContainer";

export default {
    title: "Pages/Theme",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const ThemeContainer = Template.bind({});
ThemeContainer.args = {
};