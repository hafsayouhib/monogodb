import express from "express";
const router = express.Router();
import adduser from "../controller/adduser.js";
import getuser from "../controller/getuser.js";
import getbook from "../controller/getbook.js";
import addbook from "../controller/addbook.js";
import Userdb from "../model/user.js";
import bookdb from "../model/book.js";

router.get('/',(req,res)=>{
    res.render('../views/index.ejs')
})
router.post('/',adduser)

router.get('/getuser',getuser)
router.get('/book',(req,res)=>{

    Userdb.find()
    .then(users => {
        res.render('../views/addbook.ejs', { users });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });
   
})

router.post('/book',addbook)

router.get('/getbook',getbook)




export default router