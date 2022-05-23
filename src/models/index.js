const Usuarios = require('./Usuarios');
const Categoria = require('./Categoria');
const Carteira = require('./Carteira');
const CarteiraUsuario = require('./CarteiraUsuario');


Carteira.belongsToMany(Usuarios, {
    foreingkey: 'usuario_idusuario',
    through: CarteiraUsuario
});

Usuarios.belongsToMany(Carteira, {
    foreingkey: 'carteira_idcarteira',
    through: CarteiraUsuario
});

module.exports = {
    Usuarios,
    Categoria,
    Carteira,
    CarteiraUsuario,
}