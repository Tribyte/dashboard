import React, { useEffect } from "react";
import styled from "styled-components";

const GradientInit = (compID) => {
    let back = document.getElementById(compID);
    var colors = [
        [62, 35, 255],
        [60, 255, 60],
        [255, 35, 98],
        [45, 175, 230],
        [255, 128, 0]
    ];

    var step = 0;
    var colorIndices = [0, 1, 2, 3];

    var gradientSpeed = 0.002;

    setInterval(function(){
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        back.style.background = "-webkit-linear-gradient(119deg, " + color1 + ", " + color2 + ")";
        back.style.background = "-moz-linear-gradient(119deg, " + color1 + " 0%, " + color2 + " 100%)";

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        }
    }, 10);
}

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    position: fixed;
    overflow-y: hidden;
    z-index: -1;
`;

export const GradientBackground = (props) => {
    useEffect(() => { GradientInit("background"); }, []);

    return <Background id="background">{props.value}</Background>;
}