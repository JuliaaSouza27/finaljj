const conexao = require("../config/conexao.js");

const EleitorSchema = new conexao.Schema({
  nome: String,
  titulo: String,
  cpf: String,
  filiacao: String,
  end: String,
  datanasc: String,
  secao: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "localvota",
    },
  ],
});

module.exports = conexao.model("Eleitor", EleitorSchema);
