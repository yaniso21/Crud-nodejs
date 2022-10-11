const express = require ("express");
const router = express.Router ();
const Joi = require('joi');

const authors = [
    {
        id : 1,
        firstname: "yanis",
        lastname: "kh",
        nationality: "tunisien",
    },
];




/**
 * @desc GET all user
 * @route /api/user
 * @method get
 * @acces Public
 */

 router.get("/", (req,res) =>{
    res.status(200).json(authors); 
 })
 

 //get by id


 router.get("/:id", (req,res) =>{
    const author= authors.find(b => b.id === parseInt(req.params.id));
    if (author) {
     res.status(200).json(author);
    }else{
     res.status(404).json({message : "user not found"});
    }
  })


  // Post
  
 router.post("/", (req,res)=>{
 
 
     const {error} = validatecreateuser(req.body);
   
     if (error){
         return res.status(400).json({message : error.details[0].message});
     }
 
     const author = {
         id: author.length +1,
         firstname : req.body.firstname,
         lastname: req.body.lastname,
         nationality: req.body.nationality,
         
     }
     authors.push(author)
        res.status(201).json(author); //201 created succes
  })
 
 
 // update
 
 
 router.put("/:id",(req,res)=>
 {
 const {error} = validatupdateuser(req.body);
 if (error){
     return res.status(400).json({message : error.details[0].message});
 }
 
 const author = authors.find(b=> b.id ===parseInt(req.params.id));
 if (author){
 res.status(200).json({message : "user has ben update"});
 
 }else {
     res.status(400).json({message : "user not find"});
 
 }
 })
 
 
 // Delete
 
 router.put("/:id",(req,res)=>
 {
 const author = authors.find(b=> b.id ===parseInt(req.params.id));
 
 if (author){
 res.status(200).json({message : "user has ben update"});
 }  else {
     res.status(400).json({message : "user not find"});
 
 }
 })
 
 // validate update users
 
  function validatupdateuser(obj){
 
     const schema = Joi.object({
         firstname: Joi.string().trim().min(3).max(200),
         lastname: Joi.string().trim().min(3).max(200),
         nationality:Joi.string().trim().min(3).max(500),
       });
       return schema.validate(obj);
  }
 
 
 // validate create user
 
  function validatecreateuser(obj){
 
     const schema = Joi.object({
        firstname: Joi.string().trim().min(3).max(200).required(),
         lastname: Joi.string().trim().min(3).max(200).required(),
         nationality:Joi.string().trim().min(3).max(500).required(),
       });
       return schema.validate(obj);
  }


module.exports = router;


