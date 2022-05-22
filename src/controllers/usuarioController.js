const { Usuarios } = require('../models');

const usuarioController = {
    listarUsuarios: async (req, res) => {
        const listaDeUsuarios = await Usuarios.findAll();
        res.json(listaDeUsuarios);
    },

    async cadastrarUsuario (req, res) {
        try {
            const { nome, email, senha } = req.body;
            const novoUsuario = await Usuarios.create({
                nome,
                email,
                senha
             });

             res.status(201).json(novoUsuario);
        }
        catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },

    async atualizarUsuario (req, res) {
        const {id} = req.params;
        const {nome, email, senha} = req.body;

        if (!id) return res.status(400).json('id não enviado');

        const usuarioAtualizado = await Usuarios.update({
            nome,
            email,
            senha,
        },
        {
            where: {
                id: id,
            }
        });

        res.json(usuarioAtualizado);
    },

    async deletarUsuario ( req, res) {
         try {
            const { id } = req.params;
            await Usuarios.destroy ({ 
            where: { id: id
            }}); 
            res.json(204);
        } catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    }
    
};

module.exports = usuarioController