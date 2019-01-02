import axios from 'axios'

export const login = user => {
    return axios.post('umditemperatura/login', {
            login: user.login,
            senha:user.senha
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
          })
          .catch(function (error) {
            window.location = "/?usuario=invalido";
          });
}




export const registrar = newUser => {
  return axios.post('umditemperatura/registrar', {
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