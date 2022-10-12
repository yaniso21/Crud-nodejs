const express = require ("express");
const booksPath = require ("./routes/books");
const authorsPath = require("./routes/authors");
const mongoose = require("mongoose");

// Connect To Data
mongoose

   .connect("mongodb://localhost/bookStoreDB")
   .then(()=> console.log("connected to MongoDb.."))
   .catch((error)=> console.log("connection failed to MongoDb!..", error) );


//init app
const app = express();

// app middlewares
app.use(express.json());

//Routes

app.use("/api/books",booksPath);
app.use("/api/authors",authorsPath);

// Running the server

app.listen(5000, () => console.log('the server is runing'));
