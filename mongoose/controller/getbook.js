
import bookdb from "../model/book.js";




    export const getuser = (req, res) => {
       
        bookdb.find()
        .populate('users','name') 
        .exec()
        .then(books => {
            res.render('getbook', { books });
        })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving users"
                });
            });
        }
    





export default getuser