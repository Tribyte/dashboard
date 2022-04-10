import React from "react";
import { Toptab as Component } from "./Toptab";
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import { ReactComponent as Logo } from "../../icons/logo-ico.svg";
import { ReactComponent as Home } from "../../icons/home-ico.svg";
import { ReactComponent as File } from "../../icons/file-ico.svg";

export default {
    title: "Components/Navigation",
    component: Component,
};

const Template = (args) => <Component {...args} />;

export const Temp = styled.div`
    position: absolute;
    top: 100px;
    left: 20px;
    height: 100px;
    width: 100px;
    border-radius: 8px;
    border: 1px solid #fff;
`;

export const Toptab = Template.bind({});
Toptab.args = {
    buttons: [
        { position: 0, id: 0, value: "tab 1", tabBody: <Temp />},
        { position: 0, id: 1, value: "tab 2"  },
        { position: 0, id: 2, value: <Logo />, svg: true  },
        { position: 0, id: 3, value: <Home />, svg: true  },
        { position: 0, id: 4, value: <File />, svg: true  },
    ]
};