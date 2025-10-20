// Lógica, tratativa de erros e regras de negócios

import * as BruxoModel from './../models/bruxoModel.js'

export const listarTodos = async (req, res) => {

    try {
        const bruxos = await BruxoModel.encontreTodos();

        if (!bruxos || bruxos.length === 0) {
            res.status(404).json({
                total: bruxos.length,
                mensagem: 'Não há bruxos na lista',
                bruxos
            })
        }

        res.status(200).json({
            total: bruxos.length,
            mensagem: 'Lista de bruxos',
            bruxos
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bruxo = await BruxoModel.encontreUm(id);

        if (!bruxo) {
            return res.status(404).json({
                erro: 'Bruxo não encontrado',
                mensagem: 'Verifique o id do bruxo',
                id: id
            })
        }

        res.status(200).json({
            message: 'Bruxo encontrado',
            bruxo
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}