import React from 'react'
import  BotaoMenu from './botao';

const BotoesGroup = () => {
    return (
        <div>
            <BotaoMenu iconebotao='fas fa-home' titulodobotao='Dashboard' link={'./admin'}/>
            <BotaoMenu iconebotao='fas fa-cog'  titulodobotao='Equipamentos'  link={'./equipamentos'}/>
        </div>

    );
}

export default BotoesGroup;

