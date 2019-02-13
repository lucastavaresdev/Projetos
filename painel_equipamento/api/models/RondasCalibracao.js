const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'rondas',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_equipamento: {
            type: Sequelize.STRING
        },
        ronda_ultima: {
            type: Sequelize.STRING
        },
        situacao: {
            type: Sequelize.STRING
        },
        observacao: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)