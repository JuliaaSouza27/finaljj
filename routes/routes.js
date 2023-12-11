const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const multer = require("multer");
const upload = multer({ dest: "./public" });

router.get("/", controller.abreindex);

//rota para abrir formulário de adicionar
router.get("/addeleitor", controller.abreeleitor);

//rota para receber dados do formulário e adicionar ao banco mongodb
router.post("/addeleitor", upload.single("foto"), controller.addeleitor);

router.get("/lsteleitor", controller.listar);

router.get("/addvaga", controller.abreaddvaga);
router.post("/addvaga", controller.addvaga);

router.get("/lstvaga", controller.lstvaga);
router.post("/lstvaga", controller.pesquisavaga);

router.get("/edtvaga/:id", controller.abreedtvaga);
router.post("/edtvaga/:id", controller.edtvaga);

router.get("/delvaga/:id", controller.delvaga);

router.get("/addeleicao", controller.abreaddeleicao);
router.post("/addeleicao", controller.addeleicao);

router.get("/lsteleicao", controller.lsteleicao);
router.post("/lsteleicao", controller.pesquisaeleicao);

router.get("/edteleicao/:id", controller.abreedteleicao);
router.post("/edteleicao/:id", controller.edteleicao);

router.get("/deleleicao/:id", controller.deleleicao);

module.exports = router;
