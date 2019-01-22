const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'equipamentos',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        },
        marca: {
            type: Sequelize.STRING
        },
        modelo: {
            type: Sequelize.STRING
        },
        serie: {
            type: Sequelize.STRING
        },
        patrimonio: {
            type: Sequelize.STRING
        },
        ronda: {
            type: Sequelize.INTEGER
        },
        calibracao: {
            type: Sequelize.INTEGER
        },
        situacao: {
            type: Sequelize.STRING
        },
        ativo: {
            type: Sequelize.STRING
        },
        setor: {
            type: Sequelize.INTEGER
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