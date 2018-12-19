const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        },
        sexo: {
            type: Sequelize.STRING
        },
        cadastro: {
            type: Sequelize.STRING
        },
        perfil: {
            type: Sequelize.STRING
        },
        login: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        ativo: {
            type: Sequelize.STRING
        },
        tipoUsuario: {
            type: Sequelize.STRING
        },
        crm: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)