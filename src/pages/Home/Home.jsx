import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { CreateTask } from '../../components/CreateTask/CreateTask';
import { LoginContext, ThemeContext } from '../../App';

export default function Home() {
    let navigate = useNavigate();
    const { isLogin } = useContext(LoginContext);
    const { isDark } = useContext(ThemeContext);

    useEffect(() => {
        console.log(isLogin)
        if (!isLogin) {
            navigate('/register');
        }
    }, []);

    return (
        <div className='w-full h-screen'>
            <h1 className=' text-3xl text-black dark:text-white text-center'>Home</h1>
            <div className='flex flex-wrap gap-6 max-w-[650px] w-full mt-8 mx-auto'>
                <Card title="hello1" dark={isDark} />
                <Card title="hello2" dark={isDark} />
                <Card title="hello3" dark={isDark} />
                <Card title="hello4" dark={isDark} />
                <Card title="hello5" dark={isDark} />
            </div>
            <CreateTask />
        </div>
    )
}
