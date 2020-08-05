import express from 'express';

const APP = express();
APP.use(express.json());

//get -> Buscar ou listar uma info
// post -> criar uma info
// put: atualizar uma info existente
// delete: deletar uma info existente

//corpo (request body): dados para criacao ou atualizacao de um registro
// route params: identificar qual recurso eu quero atualizar ou deletar
// query params: paginacao, filtros, ordenacao

APP.post('/users', (request, response) => {
    return response.json({ message: "hellow world"});
});

APP.listen(2608);