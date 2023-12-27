const { quizModel } = require("../models/Quiz");

const buscarResultadosPorData = async (quizData) => {
	const resultados = await quizModel.findOne({ data: quizData });
	return resultados;
};

const gravarResultado = async (quizData, novoResultado) => {
	const filtro = { data: quizData , "resultados.re": { $ne: novoResultado.re } };
	const update = { $addToSet: { resultados: novoResultado } };
	const options = { upsert: true, new: true };
	const quizAtualizado = await quizModel.findOneAndUpdate(
		filtro,
		update,
		options
	);
	return quizAtualizado;
};

module.exports = {
	buscarResultadosPorData,
	gravarResultado,
};
