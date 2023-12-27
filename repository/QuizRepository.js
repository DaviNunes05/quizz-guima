const { quizModel } = require("../models/Quiz");

const buscarResultadosPorData = async (quizData) => {
	const resultados = await quizModel.findOne({ data: quizData });
	return resultados;
};

const gravarResultado = async (quizData, novoResultado) => {
	const filtro = { data: quizData, "resultados.re": novoResultado.re };
	const resultadoExistente = await quizModel.findOne(filtro);

	if (resultadoExistente) {
		return resultadoExistente;
	}

	const update = {
		$setOnInsert: { data: quizData },
		$addToSet: { resultados: novoResultado }
	};
	const options = { upsert: true, new: true, setDefaultsOnInsert: true };
	const quizAtualizado = await quizModel.findOneAndUpdate(
		{ data: quizData },
		update,
		options
	);
	return quizAtualizado;
};

module.exports = {
	buscarResultadosPorData,
	gravarResultado,
};
