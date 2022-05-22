const { Despesas } = require('../models');

const despesaController = {
    listarDespesas: async (req, res) => {
        const listaDeDespesas = await Despesas.findAll();
        res.json(listaDeDespesas);
    },

    async cadastrarDespesa (req, res) {
        try {
            const { descricao, valor, data } = req.body;
            const novoDespesa = await Despesas.create({
                descricao,
                valor,
                data,
             });

             res.status(201).json(novoDespesa);
        }
        catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },

    async atualizarDespesa (req, res) {
        const {id} = req.params;
        const {descricao, valor, data} = req.body;

        if (!id) return res.status(400).json('id não enviado');

        const despesaAtualizado = await Despesas.update({
            descricao,
            valor,
            data,
        },
        {
            where: {
                idDespesa: id,
            }
        });

        res.json(despesaAtualizado);
    },
};

module.exports = despesaController