const Todo = require('../models/Todo');

exports.createTodo = async(req,res) => {
    try{
        const {title,description} = req.body;
        const todo = await Todo.create({title,description});
        res.status(201).json({
            success:true,
            data:todo,
            message:'Entry created successfully'
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