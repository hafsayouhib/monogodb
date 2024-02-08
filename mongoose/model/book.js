import mongoose from "mongoose";
const { Schema } = mongoose;

var schema = new mongoose.Schema({
    users: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
    },
    published: {
        type: Number,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'Userdb'
    }]
})
const bookdb = mongoose.model('bookdb', schema)
export default bookdb;