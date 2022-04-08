import React from "react";
import { Landing as Component } from "./Landing";

export default {
    title: "Pages",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Landing = Template.bind();
Landing.args = {}