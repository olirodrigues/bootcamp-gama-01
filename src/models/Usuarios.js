const db = require("../database");
const { DataTypes } = require("sequelize");

const Usuarios = db.define("Usuario", {
    idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
    },
},
{
    tableName: "usuario"
});

module.exports = Usuarios;