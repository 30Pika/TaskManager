import TaskSche from "../Module/TaskSche.js";

const UpdateSlotsCon = async (req, res) => {
    try {
        let result = await TaskSche.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            });
        if (result) {
            res.status(200).send({
                message: "Task Slot's Updated Successfully"
            });
        } else {
            res.status(400).send({
                message: "Failed to Update Task Slot's..."
            })
        }
    } catch (error) {
        res.status(500).send({
            Error: error,
            message: error.message + "  { Something went wrong from Updata Slots Task Controller... }"
        })
    }
}

export default UpdateSlotsCon;