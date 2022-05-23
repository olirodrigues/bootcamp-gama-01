const db = require("../database");
const { DataTypes } = require("sequelize");

const Receitas = db.define("Receitas", {
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
    tableName: "receita"
});

module.exports = Receitas;