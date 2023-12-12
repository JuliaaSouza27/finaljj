const conexao = require("../config/conexao.js");

const localvotaSchema = new conexao.Schema({
  secao: String,
  ende: String,
  zona: String,
});

module.exports = conexao.model("localvota", localvotaSchema);
