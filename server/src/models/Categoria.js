const db = require("../database");
const { DataTypes } = require("sequelize");

const Categoria = db.define("Categoria", {
    idcategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: DataTypes.STRING,
    }
},
{
    tableName: "categoria"
});

module.exports = Categoria;