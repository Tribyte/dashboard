import React from "react";
import { Dashboard as DashboardComponent } from "./Dashboard";

export default {
    title: "Pages",
    component: DashboardComponent,
    argTypes: {
        navigation: { control: { type: "select", options: ["sidebar", "topbar"]}}
    }
};

const navTypes = {
    options: ["sidebar", "topbar"],
    control: {
        type: "select",
        labels: ["sidebar", "topbar"]
    }
}
const Template = (args) => <DashboardComponent {...args} />;

export const Dashboard = Template.bind({});
Dashboard.args = {
    navigation: "sidebar"
};