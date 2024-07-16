const { required } = require("joi");
const mongoosee=require("mongoose");
const Schema=mongoosee.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type: String,
        required: true
    }
});


userSchema.plugin(passportLocalMongoose);
module.exports=mongoosee.model("User",userSchema);