import TaskSche from "../Module/TaskSche.js";

const TaskSearchCon = async (req, res) => {
    try {
        const data = await TaskSche.find({
            $or: [
                { task: { $regex: req.params.key } }
            ],
        });
        if (data) {
            res.status(200).send({
                data
            });
        }
    } catch (error) {
        res.status(500).send({
            Error: error,
            message: error.message + "  { Something went wrong From Task Search Controller... }"
        })
    }
}

export default TaskSearchCon;