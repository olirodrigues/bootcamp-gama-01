const { response } = require('express');
const { Carteira } = require('../models');

const carteiraController = {
    listarCarteiras: async (req, res) => {
        const listaDeCarteira = await Carteira.findall();
        
        res.json(listaDeCarteira);
       //res.send("OK");
    },

    async cadastrarCarteira (req, res) {
        try {
        const { descricao, valor, data, tipo, categoria_idcategoria } = req.body;
            const novoCarteira = await Carteira.create({
                descricao,
                valor,
                data,
                tipo,
                categoria_idcategoria
            });
            res.status(201).json(novoCarteira);
        }            
         catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    }
}

module.exports = carteiraController