const { Receitas } = require('../models');

const receitaController = {
    listarReceitas: async (req, res) => {
        const listaDeReceitas = await Receitas.findAll();
        res.json(listaDeReceitas);
    },

    async cadastrarReceita (req, res) {
        try {
            const { descricao, valor, data } = req.body;
            const novoReceita = await Receitas.create({
                descricao,
                valor,
                data,
             });

             res.status(201).json(novoReceita);
        }
        catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },

    async atualizarReceita (req, res) {
        const {id} = req.params;
        const {descricao, valor, data} = req.body;

        if (!id) return res.status(400).json('id não enviado');

        const receitaAtualizado = await Receitas.update({
            descricao,
            valor,
            data,
        },
        {
            where: {
                idReceita: id,
            }
        });

        res.json(receitaAtualizado);
    },
};

module.exports = receitaController