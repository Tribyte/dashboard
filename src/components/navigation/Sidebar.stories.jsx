import React from "react";
import { Sidebar as Component } from "./Sidebar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as Logo } from "../../icons/logo-ico.svg";
import { ReactComponent as Home } from "../../icons/home-ico.svg";
import { ReactComponent as File } from "../../icons/file-ico.svg";
import { ReactComponent as Gear } from "../../icons/gear-ico.svg";
import { ReactComponent as Exit } from "../../icons/exit-ico.svg";

export default {
    title: "Components/Navigation",
    component: Component,
};

const Template = (args) => <Component {...args} />;

const simpleToast = (val) => toast(val, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const logoClick = () => simpleToast("logo"    );
const homeClick = () => simpleToast("home"    );
const fileClick = () => simpleToast("file"    );
const gearClick = () => simpleToast("settings");
const exitClick = () => simpleToast("logout"  );

export const Sidebar = Template.bind({});
Sidebar.args = {
    buttons: [
        { position: 0, id: 0, value: <Logo />, svg: true, click: logoClick },
        { position: 0, id: 1, value: <Home />, svg: true, click: homeClick },
        { position: 0, id: 2, value: <File />, svg: true, click: fileClick },
        { position: 2, id: 3, value: <Gear />, svg: true, click: gearClick },
        { position: 2, id: 4, value: <Exit />, svg: true, click: exitClick }
    ]
};