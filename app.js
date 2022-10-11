const express = require ("express");
const Joi = require('joi');

//init app
const app = express();

// app middlewares
app.use(express.json());

const books =[
    { id: 1,
        title:"black swan",
        author:"thomas",
        description:"about digital",
        price: 15,
        cover:"soft cover"

    },
    { id: 2,
        title:"Rich dad poor dad",
        author:"Robert",
        description:"about dad",
        price: 20,
        cover:"soft cover"

    }
]

//http methods
app.get("/", (req,res)=>{

   res.send("hello express");
});
 
app.get("/api/books", (req,res) =>{
   res.json(books); 
})

app.get("/api/books/:id", (req,res) =>{
   const book= books.find(b => b.id === parseInt(req.params.id));
   if (book) {
    res.status(200).json(book);
   }else{
    res.status(404).json({message : "book not found"});
   }
 })
 
 app.post("/api/books", (req,res)=>{
   
    const schema = Joi.object({
      title: Joi.string().trim().min(3).max(200).required(),
      author: Joi.string().trim().min(3).max(200).required(),
      description:Joi.string().trim().min(3).max(500).required(),
      price:Joi.number().min(0).max().required(),
      cover:Joi.string().required(),
    })
    const {error} = schema.validate(req.body);
    if (error){
        return res.status(400).json({message : error.details[0].message});
    }

    const book = {
        id: books.length +1,
        title : req.body.title,
        author : req.body.author,
        description : req.body.description,
        price : req.body.price,
        cover : req.body.over

    }
    books.push(book);
    res.status(201).json(book); //201 created succes
 })






// Running the server

app.listen(5000, () => console.log('the server is runing'));
