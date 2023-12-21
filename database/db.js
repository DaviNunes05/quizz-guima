const mongoose = require("mongoose");

const connectToDb = () => {
	mongoose
		.connect(
			"mongodb+srv://root:admin@quizz-guima.cpgmbld.mongodb.net/?retryWrites=true&w=majority",
			// {
			// 	useNewUrlParser: true,
			// 	useUnifiedTopology: true,
			// }
		)
		.then(() => console.log("MongoDB conectado!"))
		.catch((err) => console.log(err));
};

module.exports = connectToDb;
