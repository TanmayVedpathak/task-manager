import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { LoginContext } from '../../App';

export const SlideContext = createContext();

export default function Register() {
    const [slide, setSlide] = useState(true);
    const { isLogin } = useContext(LoginContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <SlideContext.Provider value={{ slide, setSlide }}>
                <div className='flex justify-center items-center h-screen'>
                    <Form />
                </div>
            </SlideContext.Provider>
        </>

    )
}
