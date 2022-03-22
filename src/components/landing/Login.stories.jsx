import React from "react";
import { Login as LoginComponent } from "./Login";

export default {
    title: "Landing",
    component: LoginComponent,
};

const Template = (args) => <LoginComponent {...args} />;

export const Login = Template.bind({});
Login.args = {};