import React from "react";
import { DragContainer as Component } from "./DragContainer";

export default {
    title: "Components/Drag and Drop",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const DragContainer = Template.bind({});
DragContainer.args = {
    locked: true
};