const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add a name"]
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        require: [true, "Please add price"]
    },
    quantity: {
        type: Number,
        default: 1
    },
    weight: {
        type: Number,
        default: 1000
    }
})

module.exports = mongoose.model('Items', itemSchema)