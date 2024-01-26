const Todo = require('../models/Todo');

exports.getTodo = async(req,res) => {
    try{
     const todos = await Todo.find({});
     res.status(201).json({
        success:true,
        data:todos,
        message:'Fetch data successfully'
    });
    }
    catch(err) {
        console.error(err),
        console.log(err),
        res.status(500)
        .json({
         success:true,
         data:"Internal server error",
         message:err.message
        })
    }
}

exports.getTodoById = async (req,res) => {
    try{
        const id = req.params.id
        const todo = await Todo.findById({_id:id})
        if(!todo){
        return  res.status(404).json({
           success:true,
           message:'Error not found'
        })
       }
       res.status(200).json({
        success:true,
        data:todo,
        message:'Fetch data by ID successfully'
        });
    }
    catch(err) {
        console.error(err),
        console.log(err),
        res.status(500)
        .json({
            success:true,
            data:"Internal server error",
            message:err.message
        })
    }
}