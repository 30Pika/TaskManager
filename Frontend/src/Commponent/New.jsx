import React from 'react'
import { Field, Form, Formik } from "formik"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const New = () => {

    const navigate = useNavigate();

    const StoreData = async (value) => {
        await axios.post("http://localhost:2030/NoitaVonne/Task/Api/task/data",
            {
                task: value.task,
                category: value.category
            }).then((res) => {
                const message = res.data.message;
                toast.success(message);
                navigate("/");
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="md:container md:mx-auto flex justify-center">
                <div className="w-6/12 border-2 mt-14 border-sky-500 rounded-md ">
                    <Formik
                        initialValues={{ task: "", category: "" }}
                        onSubmit={(value) => {
                            StoreData(value);
                        }}
                    >
                        <Form>
                            <h1 className='text-center font-red-hat text-2xl text-purple-500 mt-2 underline'>
                                Create Task
                            </h1>
                            <div className='m-4 ms-20 flex flex-col'>
                                <label className='text-purple-500 text-lg'>Task :-&nbsp;&nbsp;</label>
                                <Field type="text" name="task"
                                    className="bg-transparent border-b-2 text-xl rounded-b-md border-red-500 w-4/5"
                                />
                            </div>
                            <div className='m-4 ms-20 flex flex-row'>
                                <label className='text-purple-500 text-lg'>Category :-&nbsp;&nbsp;</label>
                                <Field as="select" name="category"
                                    className="bg-gray-700 rounded-md w-1/4"
                                >
                                    <option  >Ex : Studey</option>
                                    <option value="normal" >Normal</option>
                                    <option value="workout">Workout</option>
                                    <option value="diet">Diet</option>
                                    <option value="work">Work</option>
                                    <option value="study">Study</option>
                                </Field>
                            </div>
                            <div className='flex justify-center m-4'>
                                <button type="submit"
                                    className='border-2 p-2 px-5 text-blue-500 border-red-700 rounded-full'>
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default New
