import React from "react";
import styled from "styled-components";
import { Sidebar } from "../../components/navigation/Sidebar";
import { Topbar } from "../../components/navigation/Topbar";
import { CampaignsNavigation } from "./sidebar/campaigns/CampaignsNavigation";

import { ReactComponent as Logo } from "../../icons/logo-ico.svg";
import { ReactComponent as Home } from "../../icons/home-ico.svg";
import { ReactComponent as File } from "../../icons/file-ico.svg";
import { ReactComponent as Gear } from "../../icons/gear-ico.svg";
import { ReactComponent as Exit } from "../../icons/exit-ico.svg";

const Container = styled.div`
    display: flex;
`;

const temp = () => console.log("test");

const buttons = [
    { position: 0, id: 0, value: <Logo />, svg: true, click: temp },
    { position: 0, id: 1, value: <Home />, svg: true, click: temp },
    { position: 0, id: 2, value: <File />, svg: true, click: temp },
    { position: 2, id: 3, value: <Gear />, svg: true, click: temp },
    { position: 2, id: 4, value: <Exit />, svg: true, click: temp }
];

export const Dashboard = (props) => {
    const openNav = "";

    return (
        <Container>
            {props.navigation === "sidebar" && <Sidebar buttons={buttons} />}
            <CampaignsNavigation />

            {/* TODO: add this much later down the line */}
            {/* {props.navigation === "topbar"  && <Topbar  buttons={buttons} />} */}
        </Container>
    );
}