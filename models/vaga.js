const conexao = require("../config/conexao.js");

const vagaSchema = new conexao.Schema({
  nmrvaga: String,
  presidente: String,
  governador: String,
  senador: String,
  depfed: String,
  depestad: String,
});

module.exports = conexao.model("vaga", vagaSchema);
