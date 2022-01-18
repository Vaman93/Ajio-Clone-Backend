const {Schema , model} = require("mongoose")

const ProductSchema = new Schema({
    brand: {type: String , required: true},
    producttype:{type: String , required: true},
    type:{type: String , required: true},
    imgsrc:{type: String , required: true},
    price:{type: Number, required: true},
    op: {type: Number, required: true},
    discount: {type: Number, required: true},
    bbs:{type: String , required: true},
    gender:{type: String , required: true}
},{
    timestamps:true,
    versionKey: false
})


module.exports = model("product" , ProductSchema)