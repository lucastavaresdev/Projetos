const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'pe_usuarios',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        perfil: {
            type: Sequelize.STRING
        },
        data_de_criacao: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)