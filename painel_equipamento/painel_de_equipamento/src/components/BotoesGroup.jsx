import React from 'react'
import  BotaoMenu from './botao';


const BotoesGroup = () => {
    return (
        <div>
            <BotaoMenu iconebotao='fas fa-home' titulodobotao='Dashboard'/>
            <BotaoMenu titulodobotao='teste teste'/>
            <BotaoMenu titulodobotao='botao1'/>
        </div>
    );
}

export default BotoesGroup;

