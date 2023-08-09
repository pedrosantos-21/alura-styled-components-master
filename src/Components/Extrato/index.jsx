import React from 'react';
import { Botao, Box } from '../../Components/UI';
import { extratoLista } from '../../info';
import Items from '../Items';

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, from, value, date }) => {
                return (
                    <Items
                        key={id}
                        type={type}
                        from={from}
                        value={value}
                        date={date} 
                    />
                );

            })}
            <Botao>Ver mais</Botao>
        </Box>
    )
};
export default Extrato;

//A "<div>" vai possuir uma key porque estamos utilizando o .map 