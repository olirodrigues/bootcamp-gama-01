const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const categoriaController = require('../controllers/categoriaController');
const carteiraController = require('../controllers/carteiraController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

const routes = express.Router();

//rotas do usuario
routes.post('/auth', usuarioController.autenticarUsuario);
routes.get('/usuario', authenticationMiddleware.auth, usuarioController.listarUsuarios);
routes.post('/usuario', usuarioController.cadastrarUsuario);
routes.put('/usuario/:id', usuarioController.atualizarUsuario);
routes.delete('/usuario/:id', usuarioController.deletarUsuario);

//rotas para categoria
routes.get('/categoria', categoriaController.listarCategoria);
routes.post('/categoria', categoriaController.cadastrarCategoria);
routes.put('/categoria/:id', categoriaController.atualizarCategoria);
//routes.delete('/categoria/:id', categoriaController.deletarCategoria);

//rotas para carteira
routes.get('/carteira', carteiraController.listarCarteiras);
routes.post('/carteira', carteiraController.cadastrarCarteira);

module.exports = routes;