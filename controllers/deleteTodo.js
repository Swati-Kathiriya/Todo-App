const Todo = require('../models/Todo');

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            data:todo,
            message:'Delete data by ID successfully'
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