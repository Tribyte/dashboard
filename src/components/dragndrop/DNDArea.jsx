import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { ThemeStyle } from "../../themes/Theme";

const Container = styled.div`
    cursor:  pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100vh / ${props => props.height});
`;

const Tile = styled.div`
    border: 2px dashed #fff;
    margin: 10px;
    border-radius: 10px;
    width: calc(100% - 40px);
`;

export const DNDArea = (props) => {
    const [ grid, setGrid ] = useState([]);

    useEffect(() => {
        let initGrid = [];
        for(let y = 0; y < props.grid.height; y++){
            let row = [];
            for(let x = 0; x < props.grid.width; x++){
                row.push(<Tile key={x} />);
            }
            initGrid.push(<Row height={props.grid.height}>{row}</Row>);
        }
        setGrid(initGrid)
    }, [])
    return (
        <Container>
            {grid}
        </Container>
    )
};