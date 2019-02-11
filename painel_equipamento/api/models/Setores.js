const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'setores',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        },
        sigla: {
            type: Sequelize.STRING
        },
        andar: {
            type: Sequelize.STRING
        },
        predio: {
            type: Sequelize.STRING
        },
        capacidade: {
            type: Sequelize.STRING
        },
        permanencia: {
            type: Sequelize.STRING
        },
        tracking: {
            type: Sequelize.INTEGER
        },
        atendimentos: {
            type: Sequelize.INTEGER
        },
        hora_util: {
            type: Sequelize.STRING
        },
        ativo: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)