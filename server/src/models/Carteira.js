const db = require("../database");
const { DataTypes } = require("sequelize");

const Carteira = db.define("Carteira", {
    idcarteira: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.DOUBLE,
    },
    data: {
        type: DataTypes.DATE,
    },
    categoria: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.INTEGER,
    },
    categoria_idcategoria: {
        type: DataTypes.INTEGER,
    },
},
{
    tableName: "carteira"
});

module.exports = Carteira;