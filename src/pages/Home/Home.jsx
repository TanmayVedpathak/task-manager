import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { CreateTask } from '../../components/CreateTask/CreateTask';
import { LoginContext, ThemeContext } from '../../App';

export default function Home() {
    const [userTask, setUserTask] = useState([]);
    const { isLogin } = useContext(LoginContext);
    const { isDark } = useContext(ThemeContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate('/register');
        } else {
            fetch("http://127.0.0.1:4000/api/v1/task/")
                .then(response => response.json())
                .then(res => {
                    if (res.success) {
                        setUserTask(res.data);
                    } else {
                        throw new Error(res.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <div className='w-full h-screen'>
            <h1 className=' text-3xl text-black dark:text-white text-center'>Home</h1>
            <div className='flex flex-wrap gap-6 max-w-[650px] w-full mt-8 mx-auto'>
                {
                    (userTask.length == 0) && <h2 className='w-full text-xl text-black dark:text-white text-center'>No task found</h2>
                }
                {
                    (userTask.length != 0) && userTask?.map(task => {
                        <Card id={task.id} title={task.title} dark={isDark} />
                    })
                }
            </div>
            <CreateTask />
        </div>
    )
}
