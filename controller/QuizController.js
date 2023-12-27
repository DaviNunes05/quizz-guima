const QuizService = require('../services/QuizService');

const buscarResultadosPorData = async (req, res) => {
	const quizData = req.params.data;
	const quizResultados = await QuizService.buscarResultadosPorData(quizData);

	res.status(200).json(
		quizResultados
	);
}

const gravarResultado = async (req, res) => {
	const quizData = req.params.data;
	const novoResultado = req.body;

	

	const resultado = await QuizService.gravarResultado(quizData, novoResultado);

	res.status(200).json(
		resultado
	)
};

module.exports = {
	buscarResultadosPorData,
	gravarResultado,
};
