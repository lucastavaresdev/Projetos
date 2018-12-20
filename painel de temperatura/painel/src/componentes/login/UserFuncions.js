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
            var url_atual = window.location.href;
            window.location = "/?usuario=invalido";
          });
}

