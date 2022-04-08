import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Index } from "./landing/Index";
import { Login } from "./landing/Login";

import { Topbar }             from "../components/navigation/Topbar";
import { GradientBackground } from "../components/styles/backgrounds/GradientBackground";
import { Bubbles }            from "../components/styles/particles/Bubbles";

import { ReactComponent as Logo }    from "../icons/logo-ico.svg";
import { ReactComponent as Discord } from "../icons/discord-ico.svg";

const Button = styled.button`
    background-color: transparent;
    font-family: ${ props => props.theme.font};
    border: 0;
    color: #fff;
    font-size: 1.75em;
    padding: 0 15px;
`;

const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Landing = () => {
    const background = useState(<GradientBackground value={ <Bubbles width="1000"/> } />);

    const HomeLink     = () => { setContent("index");    };
    const LoginLink    = () => { setContent("login");    };
    const RegisterLink = () => { setContent("register"); };
    const DiscordLink  = () => { window.location = "https://discord.gg/rD7vnzC"; };

    const [ content, setContent ] = useState("index");
    const [ component, setComponent] = useState(<Index login={LoginLink} register={RegisterLink} />); 

    useEffect(() => {
        if(content === "index")   { setComponent(<Index login={LoginLink} register={RegisterLink} />); }
        if(content === "login")   { setComponent(<Login                   register={RegisterLink} />); }
        if(content === "register"){ setComponent(<></>); }
    }, [content]);

    const buttons = [
        { position: 0, id: 0, value: <Logo />   , svg: true, click: HomeLink    },
        { position: 2, id: 1, value: <Discord />, svg: true, click: DiscordLink },
        { position: 2, id: 2, value: <Button>Login</Button>   , click: LoginLink    },
        { position: 2, id: 3, value: <Button>Register</Button>, click: RegisterLink }
    ];

    return (
        <>
            {background}
            <Topbar buttons={buttons} />
            <Centered>
                {component}
            </Centered>
        </>
    );
}