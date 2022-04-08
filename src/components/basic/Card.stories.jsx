import React from "react";
import { Card as Component } from "./Card";

export default {
    title: "Basic",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Card = Template.bind({});
Card.args = {};