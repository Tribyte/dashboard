import React from "react"
import styled from "styled-components";
import { ReactComponent as Logo } from "../../icons/logo-ico.svg";
import { ReactComponent as Create } from "./icons/create-ico.svg";
import { ReactComponent as Organize } from "./icons/organize-ico.svg";
import { ReactComponent as Play } from "./icons/sick-play-ico.svg"

const Body = styled.div`
    position: relative;
    z-index: 10;
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0 0;
`;

const Title = styled.h1`
    font-family: ${ props => props.theme.font};
    color: #fff;
    font-size: 3em;
`;

const LogoContainer = styled.div`
    width: 16em;
    fill: #fff;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    border-radius: 27px;
    text-align: center;
    transition: ease-in-out .5s;
    height: 18em;
    width: 20em;
    margin: 0 20px;
`;

const CardTitle = styled.div`
    color: #fff;
    font-family: ${ props => props.theme.font};
    font-weight: bold;
    font-size: 2em;
    margin: 0 0 20px 0;
`;

const BodyNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    border: 0;
    background-color: transparent;
    color: #fff;
    font-family: ${ props => props.theme.font};
    outline: none;
    cursor: pointer;
`;

export const Index = (props) => (
    <Body>
        <TitleContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Title>Pocket Campaigns</Title>
        </TitleContainer>

        <CardContainer>
            <Card>
                <CardTitle>Create</CardTitle>
                <Create />
                {/* <p>Pocket Campaign is a simple GM's tool to convert your ideas into easy-to-manage decks and cards. A card may represent a character, location, plot hook or really anything else you can think of. Give your card a name, add notes and identifiers to describe it.</p> */}
            </Card>
            <Card>
                <CardTitle>Organize</CardTitle>
                <Organize />
                {/* <p>Cards are sorted under Campaign Decks. Each deck has it's own custom set of tags that you define. Tag each card entry with all that apply, and search by them. Cards automatically link to each other if they find another card's name in their notes or descriptions, creating a smooth flow or even adventure track.</p> */}
            </Card>
            <Card>
                <CardTitle>Play</CardTitle>
                <Play />
                {/* <p>Decks and cards can both be shared and imported by other users. These exports can be password-locked, and even set to delete their secret notes when imported without the correct password. GMs can keep their players up to date on all the features of their world without giving anything away.</p> */}
            </Card>
        </CardContainer>
        <BodyNav>
            <Button onClick={props.register}><h1>Get Started &#62;</h1></Button>
            <Button onClick={props.login}><h2><u>or Log In</u></h2></Button>
        </BodyNav>
    </Body>
);