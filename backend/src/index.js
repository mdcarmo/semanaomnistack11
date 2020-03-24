const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de parametros
 * Query Params : Parametros nomeados enviados na rota após o ? (Filtros, paginação)
 * Route Params : Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Driver : SELECT * FROM USERS
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);
