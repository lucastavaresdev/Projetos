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
    }).catch(function (error) {
        console.log(error);
    });
  }