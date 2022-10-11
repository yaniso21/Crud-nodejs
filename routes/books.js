const express = require ("express");
const router = express.Router();
const Joi = require('joi');

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

/**
 * @desc GET all books
 * @route /api/books
 * @method get
 * @acces Public
 */
router.get("/", (req,res)=>{

   res.send("hello express");
});
 
router.get("/", (req,res) =>{
   res.json(books); 
})

router.get("/:id", (req,res) =>{
   const book= books.find(b => b.id === parseInt(req.params.id));
   if (book) {
    res.status(200).json(book);
   }else{
    res.status(404).json({message : "book not found"});
   }
 })
 
router.post("/", (req,res)=>{
    const {error} = validatecreatebook(req.body);
  
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







// update
router.put("/:id",(req,res)=>
{
const {error} = validatupdatebook(req.body);
if (error){
    return res.status(400).json({message : error.details[0].message});
}

const book =books.find(b=> b.id ===parseInt(req.params.id));
if (book){
res.status(200).json({message : "book has ben update"});

}else {
    res.status(400).json({message : "book not find"});

}
})


// Delete

router.put("/:id",(req,res)=>
{
const book =books.find(b=> b.id ===parseInt(req.params.id));

if (book){
res.status(200).json({message : "book has ben update"});
}  else {
    res.status(400).json({message : "book not find"});

}
})







// validate update book

 function validatupdatebook(obj){

    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(200),
        author: Joi.string().trim().min(3).max(200),
        description:Joi.string().trim().min(3).max(500),
        price:Joi.number().min(0).max(),
        cover:Joi.string(),
      });
      return schema.validate(obj);
 }


// validate create book

 function validatecreatebook(obj){

    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(200).required(),
        author: Joi.string().trim().min(3).max(200).required(),
        description:Joi.string().trim().min(3).max(500).required(),
        price:Joi.number().min(0).max().required(),
        cover:Joi.string().required(),
      });
      return schema.validate(obj);
 }
module.exports = router;


