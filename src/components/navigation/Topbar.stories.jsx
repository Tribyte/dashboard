import React from "react";
import { Topbar as TopbarComponent } from "./Topbar";

import { ReactComponent as Logo } from "../../icons/logo-ico.svg";
import { ReactComponent as Home } from "../../icons/home-ico.svg";
import { ReactComponent as File } from "../../icons/file-ico.svg";
import { ReactComponent as Gear } from "../../icons/gear-ico.svg";
import { ReactComponent as Exit } from "../../icons/exit-ico.svg";

export default {
    title: "Navigation",
    component: TopbarComponent,
};

const Template = (args) => <TopbarComponent {...args} />;

const temp = () => console.log("test");

export const Topbar = Template.bind({});
Topbar.args = {
    buttons: [
        { position: 0, id: 0, value: <Logo />, svg: true, click: temp },
        { position: 0, id: 1, value: <Home />, svg: true, click: temp },
        { position: 0, id: 2, value: <File />, svg: true, click: temp },
        { position: 2, id: 3, value: <Gear />, svg: true, click: temp },
        { position: 2, id: 4, value: <Exit />, svg: true, click: temp }
    ]
};