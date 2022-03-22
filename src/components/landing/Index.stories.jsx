import React from "react";
import { Index as IndexComponent } from "./Index";

export default {
    title: "Landing",
    component: IndexComponent,
};

const Template = (args) => <IndexComponent {...args} />;

export const Index = Template.bind({});
Index.args = {};