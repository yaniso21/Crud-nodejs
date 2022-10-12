const { string } = require("joi");
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const AuthorSchema = new Schema ({

    
    firstname: {
        type: String
    },
    lastName: {
        type: String,
    },
   
},{
timestamps:true
});

const   Author = mongoose.model("Author" , AuthorSchema);
    module.exports = {

        Author 
    }