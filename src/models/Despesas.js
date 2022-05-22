const db = require("../database");
const { DataTypes } = require("sequelize");

const Despesas = db.define("Despesas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    valor: {
        type: DataTypes.DOUBLE,
    },
    database: {
        type: DataTypes.DATE,
    },
},
{
    tableName: "despesa"
});

module.exports = Despesas;