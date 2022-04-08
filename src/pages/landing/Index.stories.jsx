import React from "react";
import { Index as Component } from "./Index";

export default {
    title: "Landing",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Index = Template.bind({});
Index.args = {};