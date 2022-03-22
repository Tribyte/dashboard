import styled, { keyframes } from "styled-components";

/* credit Zed Dash */

const bubbleAnimation = keyframes`
    0% { opacity: 0; }
    20% {
        opacity: 1;
        -webkit-transform: translate(0, -20%);
        transform: translate(0, -20%);
    }
    100% {
        opacity: 0;
        -webkit-transform: translate(0, -100%);
        transform: translate(0, -500%);
    }
`;

const ParticleItem = styled.span`
    opacity: 0;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.5);
    animation: ${bubbleAnimation} 3s ease-in infinite;
    border-radius: 100%;   
`;

const ParticleText = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
`;

export const Bubbles = (props) => {
    const Random = (m, n) => { return Math.floor(Math.random() * (n - m + 1)) + m; }

    const BubblesInit = (width) => {
        let bubbles = [];
        let bubblecount = (width / 50) * 10;

        for(var i = 0; i <= bubblecount; i++){
            let size = (Random(40, 80) / 10);
            const particleStyle = {
                top: Random(0, 100) + '%',
                left: Random(0, 95) + '%',
                width: size + 'px',
                height: size + 'px',
                animationDelay: (Random(0, 30) / 10) + 's'
            }

            bubbles.push(<ParticleItem key={i} style={particleStyle}></ParticleItem>);
        }

        return bubbles;
    }

    return (
        <ParticleText>
            {BubblesInit(props.width)}
        </ParticleText>
    )
}