import axios from 'axios'

export const login = user => {
    return axios
        .post('http://localhost:3003/equipamento/login', {
            usuario: user.usuario,
            senha:user.senha
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err=> {
            console.log(err)
        })
}

export const Inserir_Equipamento = equipamento => {
    return axios.post('http://localhost:3003/equipamento/cadastro_de_equipamento', {
        nome: equipamento.nome,
        marca: equipamento.marca,
        modelo: equipamento.modelo,
        serie: equipamento.serie,
        patrimonio: equipamento.patrimonio,
        ronda: equipamento.ronda,
        calibracao: equipamento.calibracao,
        situacao: equipamento.situacao,
        ativo: equipamento.ativo,
        setor: equipamento.setor,
    })
    .then(res => {
        console.log("Registrado")
        return res
    }).catch(function (error) {
        console.log(error);
    });
  }

export const Atualizar_Equipamento = (equipamento, id) => {
    return axios.put(`http://localhost:3003/equipamento/atualizar_equipamento/${id}`, {
        nome: equipamento.nome,
        marca: equipamento.marca,
        modelo: equipamento.modelo,
        serie: equipamento.serie,
        patrimonio: equipamento.patrimonio,
        ronda: equipamento.ronda,
        calibracao: equipamento.calibracao,
        situacao: equipamento.situacao,
        ativo: equipamento.ativo,
        setor: equipamento.setor,
    })
    .then(res => {
        console.log("Atualizado")
        return res
    }).catch(function (error) {
        console.log(error);
    });
  }



  
export const tracking_equipamentos = equipamento => {
    return axios.get('http://localhost:3003/equipamento/tracking_equipamentos')
}

export const quantidade_de_equipamento = equipamento => {
    return axios.get('http://localhost:3003/equipamento/quantidade_de_equipamento')
}

export const quantidade_de_calibracoes = equipamento => {
    return axios.get('http://localhost:3003/equipamento/qtd_calibracoes')
}

export const quantidade_de_rondas = equipamento => {
    return axios.get('http://localhost:3003/equipamento/rondas_status')
}

export const quantidade_de_equipamentos = equipamento => {
    return axios.get('http://localhost:3003/equipamento/qtd_equipamentos')
}

export const lista_de_equipamentos = equipamento => {
    return axios.get('http://localhost:3003/equipamento/lista_equipamentos')
}




/* ------------------------------- Cadastrar Setores-------------------------------------**/


export const Inserir_Setores= setores => {
    return axios.post('http://localhost:3003/setores/cadastro_de_setor', {
        nome: setores.nome,
        sigla: setores.sigla,
        andar: setores.andar,
        capacidade: setores.capacidade,
        permanencia: setores.permanencia,
        tracking: setores.tracking,
        ativo: setores.ativo,
        atendimentos: setores.atendimentos,
    })
    .then(res => {
        console.log("Registrado Setor")
        return res
    }).catch(function (error) {
        console.log(error);
    });
}


  export const Lista_Setores = setores => {
    return axios.get('http://localhost:3003/setores/lista_setores')
}


export const Atualizar_Setor = (setores, id) => {
    return axios.put(`http://localhost:3003/setores/atualizar_setores/${id}`, {
        nome: setores.nome,
        sigla: setores.sigla,
        andar: setores.andar,
        capacidade: setores.capacidade,
        permanencia: setores.permanencia,
        tracking: setores.tracking,
        ativo: setores.ativo,
        atendimentos: setores.atendimentos,
    })
    .then(res => {
        console.log("Atualizado Setor")
        return res
    }).catch(function (error) {
        console.log(error);
    })
}

/* ------------------------------- Cadastrar Setores-------------------------------------**/

export const Atualizar_Ronda_Calibracao = (rondacalibracao, tabela, coluna) => {
    return axios.post(`http://localhost:3003/rondas_calibracao/${tabela}/${coluna}`, {
        id_equipamento: rondacalibracao.id_equipamento,
        ronda_ultima: rondacalibracao.ronda_ultima,
        situacao: rondacalibracao.situacao,
        observacao: rondacalibracao.observacao,
    })
    .then(res => {
        console.log("Registrado Ronda ou Calibracao")
        return res
    }).catch(function (error) {
        console.log(error);
    });
  }

/* -------------------------------------- Geral -------------------------------------**/

export const Ocultar_Linha_Tabela = (id, tabela) => {
    return axios.put(`http://localhost:3003/geral/ocultar/${id}/${tabela}`)
    .then(res => {
        console.log("Ocultado com sucesso")
        return res
    }).catch(function (error) {
        console.log(error);
    });
  }