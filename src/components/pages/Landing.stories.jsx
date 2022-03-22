import React from "react";
import { Landing as LandingComponent } from "./Landing";

export default {
    title: "Pages",
    component: LandingComponent,
};

const Template = (args) => <LandingComponent {...args} />;

export const Landing = Template.bind();
Landing.args = {}