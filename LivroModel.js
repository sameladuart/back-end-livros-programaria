const mongoose = require("mongoose")

const livroSchema = new mongoose.Schema({
nome:{
    type: String,
    required: true
},
autor:{
    type: String,
    required: true
},
imagem:{
    type: String,
    required: true
},
categoria:{
    type: String,
    required: true
}

})

module.exports = mongoose.model("livro", livroSchema)