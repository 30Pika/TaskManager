import mongoose from "mongoose";

const TaskSche = new mongoose.Schema({
    task: { type: String, required: true },
    category: { type: String, required: true },
    slots:{type:String, default:"Not started"}
})

export default mongoose.model("tasks", TaskSche);