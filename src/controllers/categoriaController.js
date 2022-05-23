const { Categoria } = require('../models');

const categoriaController = {
    listarCategoria: async (req, res) => {
        const listaDeCategoria = await Categoria.findAll();
        res.json(listaDeCategoria);
    },

    async cadastrarCategoria (req, res) {
        try {
            const { descricao } = req.body;
            const novoCategoria = await Categoria.create({
                descricao,
             });

             res.status(201).json(novoCategoria);
        }
        catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },

    async atualizarCategoria (req, res) {
        const {id} = req.params;
        const {descricao} = req.body;

        if (!id) return res.status(400).json('id não enviado');

        const categoriaAtualizado = await Categoria.update({
            descricao,
        },
        {
            where: {
                idcategoria: id,
            }
        });

        res.json(categoriaAtualizado);
    },
};

module.exports = categoriaController