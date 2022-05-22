const { Carteira } = require('../models');

const carteiraController = {
    listarCarteiras: async (req, res) => {
        const listaDeCarteira = await Carteira.findall();
        
        res.json(listaDeCarteira);
    },

    async cadastrarCarteira (req, res) {
        try {
            const { saldo, total_receita, total_despesa } = req.body;
            const novoCarteira = await Carteira.create({
                saldo,
                total_receita,
                total_despesa
            });

            res.status(201).json(novoCarteira);
        } catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },
};

module.exports = carteiraController