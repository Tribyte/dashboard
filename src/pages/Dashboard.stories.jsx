import React from "react";
import { Dashboard as Component } from "./Dashboard";

export default {
    title: "Pages",
    component: Component,
    argTypes: {
        navigation: { control: { type: "select", options: ["sidebar", "topbar"]}}
    }
};

const Template = (args) => <Component {...args} />;

export const Dashboard = Template.bind({});
Dashboard.args = {
    navigation: "sidebar"
};