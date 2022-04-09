import React from "react";
import { DNDArea as Component } from "./DNDArea";

export default {
    title: "Components/Drag and Drop",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const DNDArea = Template.bind({});
DNDArea.args = {
    grid: {
        width:  8,
        height: 6
    }
};