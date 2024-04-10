import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";

const ViewTask = () => {

    const api = "http://localhost:2030/NoitaVonne/Task/Api/task";
    const [data, setdata] = useState([]);
    const [Empty, setEmpty] = useState("");

    function getData() {
        axios.get(api)
            .then((res) => {
                setdata(res.data.TaskData);
            }).catch((err) => {
                toast.error(`Error! ${err}`);
                console.log(`Error From ViewTask Page ${err.message}`);
            })
    }
    useEffect(() => {
        getData();
    }, [])

    async function UpdateSlots(event) {
        let arr = event.target.value.split(",");
        const id = arr[1];
        const field = arr[0];
        await axios.put(`http://localhost:2030/NoitaVonne/Task/Api/update/slots/${id}`,
            {
                slots: field
            })
            .then((res) => {
                const message = res.data.message;
                toast.success(message);
                getData();
            }).catch((err) => {
                toast.error(`Error! ${err}`);
                console.log(`Error From ViewTask Page Change Slot's... : ${err.message}`);
            });
    }

    const Search = async (event) => {
        const key = event.target.value;
        setEmpty(key);
        await axios.get(`http://localhost:2030/NoitaVonne/Task/Api/search/task/${key}`)
            .then((res) => {
                if (res.data.data) {
                    setdata(res.data.data);
                }
            }).catch((err) => {
                toast.error(`Error! ${err}`);
                console.log(`Error From Search Block Product List Page ${err.message}`);
            })
    }

    const Reset = () => {
        getData();
        setEmpty("");
        Filter();
    }

    const Delete = async (id) => {
        await axios.delete(`http://localhost:2030/NoitaVonne/Task/Api/delete/${id}`)
            .then((res) => {
                getData();
                toast.success('Delete Successfully');
            }).catch((err) => {
                toast.error(`Error! ${err}`);
                console.log(`Error Form Delete Task function In ViewTask page ${err.message}`);
            });
    }

    function Filter(event) {
        const cate = event.target.value;
        const ca = data.filter(item => item.category === cate);
        setdata(ca);
    }

    return (
        <>
            <div class="container mx-auto p-4">
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <caption class="caption-top mb-5">
                                <div className="flex justify-center">
                                    <Link to="/New"
                                        className='border-2 p-1 px-5 text-blue-500 border-red-700 
                                        rounded-full me-auto flex items-center text-2lg'>
                                        <i class='bx bx-plus text-2xl'></i>
                                        New Task
                                    </Link >
                                    <label className='items-center text-4xl text-emerald-400 me-auto'>Task's</label>
                                    <div className="flex justify-center ">
                                        <div className='flex justify-center border-2 rounded-lg'>
                                            <select className=" bg-slate-800 rounded-md w-30 p-1.5"
                                                onChange={Filter}>
                                                <option >Option</option>
                                                <option value="normal" >Normal</option>
                                                <option value="workout">Workout</option>
                                                <option value="diet">Diet</option>
                                                <option value="work">Work</option>
                                                <option value="study">Study</option>
                                            </select>
                                            <i class='bx bx-filter-alt text-3xl'></i>
                                        </div>
                                        <i class='bx bx-x text-4xl me-3'
                                            onClick={Reset}></i>
                                        <input type="text" placeholder='Search' onChange={Search} value={Empty}
                                            className='bg-transparent text-slate-100 border-2 rounded-lg' />
                                        <i class='bx bx-x text-4xl'
                                            onClick={Reset}></i>
                                    </div>
                                </div>
                            </caption>
                            <thead>
                                <tr>
                                    <th class="px-2 py-2 border-b-2 border-red-400  text-left text-xl  text-purple-600">#</th>
                                    <th class="px-2 py-2 border-b-2 border-red-400  text-left text-xl  text-purple-600">Task</th>
                                    <th class="px-2 py-2 border-b-2 border-red-400  text-left text-xl  text-purple-600">Category</th>
                                    <th class="px-2 py-2 border-b-2 border-red-400  text-left text-xl  text-purple-600">Slots</th>
                                    <th class="px-2 py-2 border-b-2 border-red-400  text-left text-xl  text-purple-600">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    data.map((item, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td class="px-3 py-2 border-b border-gray-200  text-lg">{index + 1}</td>
                                                    <td class="px-3 py-2 border-b border-gray-200  text-lg">{item.task}</td>
                                                    <td class="px-3 py-2 border-b border-gray-200  text-lg">{item.category}</td>
                                                    <td class="px-3 py-2 border-b border-gray-200  text-lg">
                                                        {/* <ul>
                                                            <li onClick={() => UpdateSlots("Not Start", item._id)}>Not Start</li>
                                                            <li onClick={() => UpdateSlots("Pending", item._id)}>Pending</li>
                                                            <li onClick={() => UpdateSlots("Done", item._id)}>Done</li>
                                                        </ul> */}
                                                        <select className=" bg-slate-800 rounded-md w-30" onChange={UpdateSlots}>
                                                            <option >{item.slots}</option>
                                                            <option value={["Not Start", item._id]} >Not Start</option>
                                                            <option value={["Pending", item._id]}>Pending</option>
                                                            <option value={["Done", item._id]}>Done</option>
                                                        </select>
                                                    </td>
                                                    <td class="px-3 py-2 border-b text-lg">
                                                        <i class='bx bx-trash text-red-600 text-2xl'
                                                            onClick={() => {
                                                                if (window.confirm("Are You Sure To Delete Data...!")) { Delete(item._id) }
                                                            }}>
                                                        </i>
                                                    </td>
                                                </tr>

                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >

        </>
    )
}

export default ViewTask
