import axios from 'axios'

// export const register = newUser => {
//     return axios.post('users/register', {
//         first_name: newUser.first_name,
//         last_name: newUser.last_name,
//         email: newUser.email,
//         password: newUser.password,
//     })
//     .then(res => {
//         console.log("Registered")
//     })
// }

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