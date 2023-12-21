const quizRepository = require("../repository/QuizRepository")

const buscarResultadosPorData = async (quizData) =>{
    return await quizRepository.buscarResultadosPorData(quizData);
}

const gravarResultado = async (quizData, novoResultado) =>{
    return await quizRepository.gravarResultado(quizData, novoResultado);
}

module.exports = {
    buscarResultadosPorData,
    gravarResultado
}