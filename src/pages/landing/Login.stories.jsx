import React from "react";
import { Login as Component } from "./Login";

export default {
    title: "Pages/Landing",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Login = Template.bind({});
Login.args = {};