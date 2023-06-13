import mongoose from "mongoose";
import { Schema } from "mongoose";


const User = new Schema({
    name: String,
    email: String,
    password: String,
    pin : String,
    number : Number,
    address: String,
    panCard : String
});

export default mongoose.model("Users", User)