import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThemeStyle } from "../../themes/Theme";

// Modified version of drag-react

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100%;

    border: 1px solid #fff;
    border-radius: 8px;
`;

export function DragContainer(props){
    const dragRef = useRef();
    let isDown = false;
    let offset = [0, 0];

    const onMouseDown = (e) => {
        isDown = true;
        offset = [
            dragRef.current.offsetLeft - e.clientX,
            dragRef.current.offsetTop - e.clientY
        ];
        document.addEventListener('mousemove', onMouseMove, true);
    }

    const onMouseUp = (e) => {
        isDown = false;
        document.removeEventListener('mousemove', onMouseMove, true);
    }
    
    const onMouseMove = (e) => {
        e.preventDefault();

        if(isDown && dragRef.current){
            dragRef.current.style.left = (e.clientX + offset[0]) + 'px';
            dragRef.current.style.top = (e.clientY + offset[1]) + 'px';
        }
    }

    useEffect(() => {
        const dragDiv = dragRef.current;

        if(!props.locked){
            if(dragDiv){
                dragDiv.addEventListener('mousedown', onMouseDown, true);
                document.addEventListener('mouseup', onMouseUp, true);
            }
        }

        return () => {
            dragDiv?.removeEventListener('mousedown', onMouseDown, true);
            document.removeEventListener('mouseup', onMouseUp, true);
            document.removeEventListener('mousemove', onMouseMove, true);
        }
    }, [props.locked]);

    return (
        <Container ref={dragRef}>
        </Container>
    )
};