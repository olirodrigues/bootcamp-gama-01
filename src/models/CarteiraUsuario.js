const db = require("../database");
const { DataTypes } = require("sequelize");
const Usuarios = require('./Usuarios');
const Carteira = require('./Carteira');

const CarteiraUsuario = db.define('CarteiraUsuario', {
    carteira_idcarteira: {
        type: DataTypes.INTEGER,
        references: {
            model: Carteira,
            key: 'idcarteira',
            onDelete: 'cascade',
        },
    },
    usuario_idusuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuarios,
            key: 'idusuario',
            onDelete: 'cascade',
        },
    },
},
    {
        tableName: 'carteira_usuario',
    }
);

module.exports = CarteiraUsuario;