import TaskSche from "../Module/TaskSche.js";

const DeleteTaskCon = async(req,res)=>{
    try {
        const result = await TaskSche.deleteOne({ _id: req.params.id });
        if(result){
            res.status(200).send({
                message: "Task Deleted Successfully"
            });
        }else{
            res.status(400).send({
                message: "Failed to Delete Task..."
            })
        }
    } catch (error) {
        res.status(500).send({
            Error: error,
            message: error.message + "  { Something went wrong from Delete Task Controller... }"
        })
    }
}

export default DeleteTaskCon;