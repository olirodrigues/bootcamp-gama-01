const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const carteiraController = require('../controllers/carteiraController');
const receitaController = require('../controllers/receitaController');
const despesaController = require('../controllers/despesaController');

const routes = express.Router();

routes.get('/usuario', usuarioController.listarUsuarios);
routes.post('/usuario', usuarioController.cadastrarUsuario);
routes.put('/usuario/:id', usuarioController.atualizarUsuario);
routes.delete('/usuario/:id', usuarioController.deletarUsuario);

routes.post('/carteira', carteiraController.cadastrarCarteira);

routes.get('/receita', receitaController.listarReceitas);
routes.post('/receita', receitaController.cadastrarReceita);
routes.put('/receita', receitaController.atualizarReceita);

routes.get('/despesa', despesaController.listarDespesas);
routes.post('/despesa', despesaController.cadastrarDespesa);
routes.put('/despesa', despesaController.atualizarDespesa);


module.exports = routes;