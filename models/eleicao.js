const conexao = require("../config/conexao.js");

const eleicaoSchema = new conexao.Schema({
  eleicano: String,
});

module.exports = conexao.model("eleicao", eleicaoSchema);
