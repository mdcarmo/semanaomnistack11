const connection = require("../database/connection");
const generationUniqueId = require("../utils/generateUniqueId");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    //gera o id
    const id = generationUniqueId();

    //conectar com o banco de dados
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
