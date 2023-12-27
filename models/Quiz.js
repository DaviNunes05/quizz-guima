const mongoose = require("mongoose");
const { Schema } = mongoose;
const uuid = require("uuid");

function dataAtualFormatada() {
	const dataAtual = new Date();
	const dia = ("0" + dataAtual.getDate()).slice(-2);
	const mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
	const ano = dataAtual.getFullYear().toString().slice(-2);

	return dia + mes + ano;
}

const quizResultadoSchema = new Schema(
	{
		re: {
			type: Number,
		},
		nome: {
			type: String,
		},
		pontuacao: {
			type: Number,
		},
		tempo: {
			type: Number,
		},
		p_corretas: {
			type: Array,
		},
		p_incorretas: {
			type: Array,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const quizSchema = new Schema(
	{
		_id: {
			type: String,
			default: () => uuid.v4(),
		},
		data: {
			type: String,
			default: dataAtualFormatada,
		},
		resultados: [quizResultadoSchema],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

quizSchema.path("resultados").validate(async function (resultados) {
	const jogadores = new Set();
	for (const resultado of resultados) {
		const re = resultado.re;

		if (jogadores.has(re)) {
			throw new Error("Um jogador não pode refazer o mesmo quiz.");
		}

		jogadores.add(re);
	}

	return true;
}, "Um jogador não pode refazer o mesmo quiz.");

const quizModel = mongoose.model("quizz", quizSchema);

module.exports = {
	quizModel,
};
