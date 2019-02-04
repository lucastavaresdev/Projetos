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
    return axios.get('http://localhost:3003/equipamento/rondas_status')
}