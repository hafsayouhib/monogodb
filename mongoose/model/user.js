import mongoose from "mongoose";

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phonenum: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
      
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookdb' 
    }]
})
const Userdb = mongoose.model('Userdb', schema)
export default Userdb;