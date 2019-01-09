import axios from 'axios'

export const login = user => {
    return axios.post('http://itechflow.cloudapp.net:3004/umditemperatura/login', {
            login: user.login,
            senha:user.senha
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
          })
          .catch(function (error) {
            window.location = "http://itechflow.cloudapp.net/demos/painel_temperatura?usuario=invalido";
          });
}

export const registrar = newUser => {
  return axios.post('http://itechflow.cloudapp.net:3004/umditemperatura/registrar', {
    nome: newUser.nome,
    sexo: newUser.sexo,
    cadastro: newUser.cadastro,
    perfil: newUser.perfil,
    login: newUser.login,
    senha: newUser.senha,
    ativo: newUser.ativo,
    tipoUsuario: newUser.tipoUsuario,
    crm: newUser.crm,
  })
  .then(res => {
       console.log("Registrado")
  }).catch(function (error) {
      console.log(error);
  });
}