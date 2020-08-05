import express from 'express';
import routes from './routes';

const APP = express();
APP.use(express.json());
APP.use(routes);

//get -> Buscar ou listar uma info
// post -> criar uma info
// put: atualizar uma info existente
// delete: deletar uma info existente

//corpo (request body): dados para criacao ou atualizacao de um registro
// route params: identificar qual recurso eu quero atualizar ou deletar
// query params: paginacao, filtros, ordenacao


APP.listen(2608);

//rota para listar o total de conexoes realizadas
//rota para criar uma nova conexao
//rota para criar uma aula
// rota para listar aulas
//      filtar por materia, dia da semana e horario