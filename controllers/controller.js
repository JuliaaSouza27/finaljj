const Eleitor = require("../models/Eleitor");
const vaga = require("../models/vaga");
const eleicao = require("../models/eleicao");
const localvota = require("../models/localvota");

function abreindex(req, res) {
  res.render("index");
}

function abreeleitor(req, res) {
  res.render("addeleitor");
}

function addeleitor(req, res) {
  let nome = req.body.nome;
  let titulo = req.body.titulo;
  let cpf = req.body.cpf;
  let filiacao = req.body.filiacao;
  let end = req.body.end;
  let datanasc = req.body.datanasc;

  let eleitor = new Eleitor({
    nome: nome,
    titulo: titulo,
    cpf: cpf,
    filiacao: filiacao,
    end: end,
    datanasc: datanasc,
  });

  eleitor.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addeleitor");
  });
}

function listar(req, res) {
  Eleitor.find({}).then(function (eleitores, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lsteleitor.ejs", { eleitores: eleitores });
    }
  });
}

function pesquisaeleitor(req, res) {
  Eleitor.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
    eleitor,
    err
  ) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lsteleitor.ejs", { eleitor: eleitor });
    }
  });
}

function abreedteleitor(req, res) {
  Eleitor.findById(req.params.id).then(function (eleitor, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edteleitor.ejs", { eleitor: eleitor });
    }
  });
}

function edteleitor(req, res) {
  Eleitor.findByIdAndUpdate(req.params.id, {
    nome: req.body.nome,
    titulo: req.body.titulo,
    cpf: req.body.cpf,
    filiacao: req.body.filiacao,
    end: req.body.end,
    datanasc: req.body.datanasc,
  }).then(function (eleitor, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lsteleitor");
    }
  });
}

function deleleitor(req, res) {
  Eleitor.findByIdAndDelete(req.params.id).then(function (eleitor, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lsteleitor");
    }
  });
}
function abreaddvaga(req, res) {
  res.render("addvaga.ejs");
}

function addvaga(req, res) {
  let v = new vaga({
    nmrvaga: req.body.nmrvaga,
    presidente: req.body.presidente,
    governador: req.body.governador,
    senador: req.body.senador,
    depfed: req.body.depfed,
    depestad: req.body.depestad,
  });
  v.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addvaga");
  });
}

function lstvaga(req, res) {
  vaga.find({}).then(function (vaga, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstvaga.ejs", { vaga: vaga });
    }
  });
}

function pesquisavaga(req, res) {
  vaga
    .find({ nome: new RegExp(req.body.pesquisar, "i") })
    .then(function (vaga, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstvaga.ejs", { vaga: vaga });
      }
    });
}

function abreedtvaga(req, res) {
  vaga.findById(req.params.id).then(function (vaga, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtvaga.ejs", { vaga: vaga });
    }
  });
}

function edtvaga(req, res) {
  vaga
    .findByIdAndUpdate(req.params.id, {
      nmrvaga: req.body.nmrvaga,
      presidente: req.body.presidente,
      governador: req.body.governador,
      senador: req.body.senador,
      depfed: req.body.depfed,
      depestad: req.body.depestad,
    })
    .then(function (vaga, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.redirect("/lstvaga");
      }
    });
}

function delvaga(req, res) {
  vaga.findByIdAndDelete(req.params.id).then(function (vaga, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstvaga");
    }
  });
}

function abreaddeleicao(req, res) {
  eleicao.find({}).then(function (eleicao, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("addeleicao.ejs", { eleicao: eleicao });
    }
  });
}

function addeleicao(req, res) {
  let Eleicao = new eleicao({
    eleicano: req.body.eleicano,
  });
  Eleicao.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addeleicao");
  });
}

function lsteleicao(req, res) {
  eleicao.find({}).then(function (eleicao, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lsteleicao.ejs", { eleicao: eleicao });
    }
  });
}

function pesquisaeleicao(req, res) {
  eleicao
    .find({ eleicano: new RegExp(req.body.pesquisar, "i") })
    .then(function (eleicao, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lsteleicao.ejs", { eleicao: eleicao });
      }
    });
}

function abreedteleicao(req, res) {
  eleicao.findById(req.params.id).then(function (eleicao, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edteleicao.ejs", { eleicao: eleicao });
    }
  });
}

function edteleicao(req, res) {
  eleicao
    .findByIdAndUpdate(req.params.id, {
      eleicano: req.body.eleicano,
    })
    .then(function (eleicao, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.redirect("/lsteleicao");
      }
    });
}

function deleleicao(req, res) {
  eleicao.findByIdAndDelete(req.params.id).then(function (eleicao, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lsteleicao");
    }
  });
}

function abreaddlocalvota(req, res) {
  res.render("addlocalvota.ejs");
}

function addlocalvota(req, res) {
  let l = new localvota({
    secao: req.body.secao,
    ende: req.body.ende,
    zona: req.body.zona,
  });
  l.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addlocalvota");
  });
}

function lstlocalvota(req, res) {
  localvota.find({}).then(function (localvota, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstlocalvota.ejs", { localvota: localvota });
    }
  });
}

function pesquisalocalvota(req, res) {
  localvota
    .find({ nome: new RegExp(req.body.pesquisar, "i") })
    .then(function (localvota, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstlocalvota.ejs", { localvota: localvota });
      }
    });
}

function abreedtlocalvota(req, res) {
  localvota.findById(req.params.id).then(function (localvota, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtlocalvota.ejs", { localvota: localvota });
    }
  });
}

function edtlocalvota(req, res) {
  localvota
    .findByIdAndUpdate(req.params.id, {
      secao: req.body.secao,
      ende: req.body.ende,
      zona: req.body.zona,
    })
    .then(function (localvota, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.redirect("/lstlocalvota");
      }
    });
}

function dellocalvota(req, res) {
  localvota.findByIdAndDelete(req.params.id).then(function (localvota, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstlocalvota");
    }
  });
}

module.exports = {
  abreindex,
  abreeleitor,
  addeleitor,
  listar,
  pesquisaeleitor,
  abreedteleitor,
  edteleitor,
  deleleitor,
  abreaddvaga,
  addvaga,
  lstvaga,
  pesquisavaga,
  delvaga,
  abreedtvaga,
  edtvaga,
  abreaddeleicao,
  addeleicao,
  lsteleicao,
  pesquisaeleicao,
  deleleicao,
  abreedteleicao,
  edteleicao,
  abreaddlocalvota,
  addlocalvota,
  lstlocalvota,
  pesquisalocalvota,
  dellocalvota,
  abreedtlocalvota,
  edtlocalvota,
};
