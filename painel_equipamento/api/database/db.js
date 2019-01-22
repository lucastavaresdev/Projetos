const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("hmcp", "itechflow@itechbd", "Itechm@ster_2018", {
    host: 'itechbd.mysql.database.azure.com',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 