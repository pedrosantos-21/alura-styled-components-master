import React from 'react';
import Item from '../Item';
import styled from 'styled-components';

const Items = styled.div`
    box-shadow: 4px 4px 20px 0 rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0 ; 
    display: flex;
    aling-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;

`

export default (props) => {
    return (
        <Items>
            <Item {...props} />
            <span>{props.date}</span>
        </Items>
    )
};