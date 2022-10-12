const { string } = require("joi");
const mongoose = require ("mongoose");

const AuthorSchema = new mongoose.Schema ({

    firstname :
    {
        type: string,
        required: true,
        trim : true ,
        minlength : 3,
        maxlength : 200,

    },
    lastname :
    {
        type: string,
        required: true,
        trim : true ,
        minlength : 3,
        maxlength : 200,

    },
    nationality:
    {
        type: string,
        required: true,
        trim : true ,
        minlength : 2,
        maxlength : 100,

    },
},{
timestamps:true
});

const   Author = mongoose.model("Author" , AuthorSchema);
    module.exports = {

        Author 
    }