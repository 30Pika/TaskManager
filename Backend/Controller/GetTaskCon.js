import TaskSche from "../Module/TaskSche.js";

const GetTaskCon = async (req, res) => {
    try {
        const TaskData = await TaskSche.find();
        if (TaskData) {
            res.status(200).send({
                message: "Fetched Task Successfully",
                TaskData
            });
        } else {
            res.status(400).send({
                message: "Can't Available Task Data To Fetch..."
            })
        }
    } catch (error) {
        res.status(500).send({
            Error: error,
            message: error.message + "  { Something went wrong from Fetch Task Controller... }"
        })
    }
}

export default GetTaskCon;