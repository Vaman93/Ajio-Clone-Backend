const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name : {type: String , required: true},
    email : {type: String , required: true},
    password : {type: String , required: true},
    mobile : {type: Number, required: false},
    bill:{type: Number, required: false , default : 0},
    CheckOut:[{type: mongoose.Schema.Types.ObjectId , ref:"product",required: false}],
    Closte:[{type: mongoose.Schema.Types.ObjectId , ref:"product",required: false}]
} , {
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model("user", User)