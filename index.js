require('dotenv').config()
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

connectToDb();

const app = express();
const port = process.env.PORT;

app.use("/", (req, res) =>{
    res.send("Server UP!")
})

app.use(cors())
app.use(express.json())
app.use(routes);

app.set("view engine", "ejs");

app.listen(port, () => console.log(`Servidor UP! em http://localhost:${port}`));
