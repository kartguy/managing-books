const Book =require("../models/book");

const mongoose=require("mongoose")

//get all books
async function handleGetAllBooks(req,res){
    try {
        const allbooks=await Book.find({});
        res.status(200).send({ success: true, message: allbooks });
      } 
      catch (error) {
        res
          .status(500)
          .send({message: "something went wrong!!!" });
      }
}


//add book
async function handleAddBook(req,res){
    const body=req.body;
    if(
        !body||
        !body.book_title||
        !body.book_author||
        !body.book_summary
    ){
        return res.status(400).json({msg:'All fields are required...'});
    }

    const result=await Book.create({
        title:body.book_title,
        author:body.book_author,
        summary:body.book_summary
    })

    console.log("result",result);

    return res.status(201).json({msg:'success',id:result._id})
}


//get book by id
async function handleGetBookById(req,res){
    try {
        const book=await Book.findById(req.params.id);
        if (book) {
          res.status(200).send({ success: true, message: book });
        } else {
          res.status(404).send({ success: false, message: "Book not found" });
        }
      } catch (error) {
        res
          .status(500)
          .send({ success: false, message: "Something went wrong!!!" });
      }
}


//Delete
async function handleDeleteBookById(req,res){
    try{
        const book=await Book.findByIdAndDelete(req.params.id);
        if (book) {
            res.status(200).send({ success: true, message: "Book deleted" });
          } else {
            res.status(404).send({ success: false, message: "Book not found" });
          }
    }
    catch(error){
        res
          .status(500)
          .send({ success: false, message: "Something went wrong!!!" });
    }
    
}


//Update
async function handleUpdateBookById(req,res){
    
    try {
        const body=req.body;
        const bookId=req.params.id;
        if(body.book_title){
            await Book.findByIdAndUpdate(
                bookId,{
                title:`${body.book_title}`
            }
        )}
        if(body.book_author){
            await Book.findByIdAndUpdate(
                bookId,{
                author : `${body.book_author}`
            }
        )}
        if(body.book_summary){
            await Book.findByIdAndUpdate(
                bookId,{
                summary : `${body.book_summary}`
            }
        )
        }
        return res.json({msg:'Successfully Updated'})
        
    } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong!!!" });
  }
    }
    
module.exports={
    handleGetAllBooks,
    handleAddBook,
    handleGetBookById,
    handleDeleteBookById,
    handleUpdateBookById
}