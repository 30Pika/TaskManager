import express from "express";
import TaskCon from "../Controller/TaskCon.js";
import GetTaskCon from "../Controller/GetTaskCon.js";
import DeleteTaskCon from "../Controller/DeleteTaskCon.js";
import UpdateSlotsCon from "../Controller/UpdataSlotsCon.js";
import TaskSearchCon from "../Controller/SearchTaskCon.js";

const router = express.Router();

//Store Task in Database Api
router.post("/task/data", TaskCon);

// Fetch Task Api
router.get("/task", GetTaskCon);

// Delete Task Api
router.delete("/delete/:id", DeleteTaskCon);

// Updata Slots Api
router.put("/update/slots/:id", UpdateSlotsCon);

// Task Search Api
router.get("/search/task/:key", TaskSearchCon);

export default router;