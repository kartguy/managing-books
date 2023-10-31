const express=require('express');
const{
    handleGetAllBooks,
    handleAddBook,
    handleGetBookById,
    handleDeleteBookById,
    handleUpdateBookById
} =require('../controllers/book');

const router=express.Router();

router
.route("/")
.post(handleAddBook)
.get(handleGetAllBooks);


router
.route("/:id")
.get(handleGetBookById)
.delete(handleDeleteBookById)
.patch(handleUpdateBookById);

module.exports=router;