import React from 'react'
import styled from 'styled-components';

const Item = styled.div`
    display:flex;
    flex-direction: column;

    .text{
        font-weight: bold;
    };
`

export default ({ type, from, value }) => {
    return (
        <Item>
            <span className="text">
                {type}
            </span>
            <span>
                {from}
            </span>
            <span>
                {value}
            </span>
        </Item>
    )
}

//  flex-direction: collummn para deixar os items organizados em colunas    


