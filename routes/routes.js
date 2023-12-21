const routes = require("express").Router();
const {
    gravarResultado,
    buscarResultadosPorData
} = require("../controller/QuizController")

routes.get("/:data", buscarResultadosPorData)
routes.post("/:data/resultado", gravarResultado)

module.exports = routes