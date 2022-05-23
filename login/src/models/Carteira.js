const db = require("../database");
const { DataTypes } = require("sequelize");

const Carteira = db.define("Carteira", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    saldo: {
        type: DataTypes.DOUBLE,
    },
    total_receita: {
        type: DataTypes.DOUBLE,
    },
    total_despesa: {
        type: DataTypes.DOUBLE,
    },
},
{
    tableName: "carteira"
});

module.exports = Carteira;