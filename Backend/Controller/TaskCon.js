import TaskSche from "../Module/TaskSche.js";

const TaskCon = async (req, res) => {

    try {
        const task = new TaskSche(req.body);
        const result = await task.save();
        if (result) {
            res.status(200).send({
                message: "Task Added Successfully"
            });
        } else {
            res.status(400).send({
                message: "Failed to Add Task"
            })
        }
    } catch (error) {
        res.status(500).send({
            Error: error,
            message: error.message + "  { Something went wrong from Task Controller... }"
        })
    }
}

export default TaskCon;