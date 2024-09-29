
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import BlackPlus from "../../assets/plus-black.svg"
import WhitePlus from "../../assets/plus-white.svg"
import { useForm } from "react-hook-form";

export const CreateTask = () => {
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState();
    const { isDark } = useContext(ThemeContext);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleCreateTask = (formData) => {
        fetch("http://127.0.0.1:4000/api/v1/task/", {
            method: 'POST',
            headers: {
                "Cookie": localStorage.getItem("token"),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": formData.task,
            }),
        })
            .then(response => response.json())
            .then(res => {
                if (res.success) {
                    reset();
                    setShowForm(false);
                } else {
                    reset();
                    setError(res.data);
                    throw new Error(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <>
            <div className='bg-black dark:bg-white w-10 h-10 p-1 border border-white dark:border-black rounded fixed bottom-2 right-2 cursor-pointer'>
                <img className='w-full h-auto' src={isDark ? BlackPlus : WhitePlus} alt='plus' onClick={() => setShowForm(true)} />
            </div>

            <div className={`w-full h-screen flex justify-center items-center bg-white dark:bg-black absolute top-0 left-0 ${showForm ? '' : 'hidden'}`}>
                <div className='bg-black dark:bg-white w-10 h-10 p-1 border border-white dark:border-black rounded fixed top-4 right-4 cursor-pointer' onClick={() => setShowForm(false)}>
                    <img className='w-full h-auto rotate-45' src={isDark ? BlackPlus : WhitePlus} alt='plus' />
                </div>
                <div className='max-w-[400px] w-full h-min bg-black dark:bg-white p-5 rounded overflow-hidden'>
                    <form onSubmit={handleSubmit(handleCreateTask)}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className='block text-white dark:text-black'>Enter Task:</label>
                                <input className='w-full px-2 py-1 border text-black dark:text-white bg-white dark:bg-black border-blue-400 dark:border-white focus:border-blue-400 focus:outline-none rounded' type="text" name="task" placeholder='Enter Task' {...register("task", { required: true })} />
                            </div>
                            <div className='flex justify-center'>
                                <button className='rounded bg-blue-500 hover:bg-blue-400 px-2 py-1 text-black text-sm' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                    {
                        error &&
                        <p className='text-red-600'>{error}</p>
                    }
                </div>
            </div>
        </>
    )
}
