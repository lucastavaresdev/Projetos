import React from 'react'
import  BotaoMenu from './botao';

const BotoesGroup = () => {
    return (
        <div>
            <BotaoMenu iconebotao='fas fa-home' titulodobotao='Dashboard' link={'./admin'}/>
            <BotaoMenu iconebotao='fas fa-map-marker-alt'  titulodobotao='Localizar Equipamento'  link={'./localizarequipamentos'}/>
            <BotaoMenu iconebotao='fas fa-list'  titulodobotao='Listar Equipamentos'  link={'./listarequipamentos'}/>
            <BotaoMenu iconebotao='fas fa-cubes'  titulodobotao='Cadastro de setores'  link={'./cadastrosetores'}/>
            <BotaoMenu iconebotao='fab fa-buromobelexperte'  titulodobotao='Relatórios'  link={'./relatorios'}/>
        </div>
    );
}

export default BotoesGroup;

