const express = require ("express");
const booksPath = require ("./routes/books");
const authorsPath = require("./routes/authors");

//init app
const app = express();

// app middlewares
app.use(express.json());

//Routes

app.use("/api/books",booksPath);
app.use("/api/authors",authorsPath);

// Running the server

app.listen(5000, () => console.log('the server is runing'));
