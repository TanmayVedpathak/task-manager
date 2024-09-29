import { useContext, useState } from 'react';
import { SignUp } from './SignUp';
import { LogIn } from './LogIn';
import { SlideContext } from '../../pages/Register/Register';
import "./form.css";

export default function Form() {
    const { slide, setSlide } = useContext(SlideContext);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className='startUp max-w-[400px] w-full h-min bg-black dark:bg-white p-5 rounded overflow-hidden'>
                <div className={`w-full mb-4 flex transform transition-transform duration-500 ${isVisible && slide ? '-translate-x-full' : 'translate-x-0'}`}>
                    <div className="w-full flex-none">
                        <h2 className="text-white dark:text-black text-2xl text-center font-semibold">Signup Form</h2>
                    </div>
                    <div
                        className="w-full flex-none">
                        <h2 className="text-white dark:text-black text-2xl text-center font-semibold">Login Form</h2>
                    </div>
                </div>

                <div className='relative flex justify-evenly items-center px-2 py-1 border border-white dark:border-black rounded mb-4 mx-6'>
                    <div className={`absolute w-1/2 h-full bg-blue-500 rounded top-0 duration-500 ${isVisible && slide ? 'right-0' : 'left-0'}`}></div>
                    <p className={`w-1/2 text-center z-[2] cursor-pointer ${isVisible && slide ? 'text-white dark:text-black' : 'text-black dark:text-white'}`} onClick={() => { setIsVisible(false) }}>SignUp</p>
                    <p className={`w-1/2 text-center z-[2] cursor-pointer ${isVisible && slide ? 'text-black dark:text-white' : 'text-white dark:text-black'}`} onClick={() => { setIsVisible(true) }}>LogIn</p>
                </div>

                <div className={`w-full mb-4 flex transform transition-transform duration-500 gap-2 ${isVisible && slide ? '-translate-x-full' : 'translate-x-0'}`}>
                    <SignUp />
                    <LogIn />
                </div>
            </div >
        </>
    )
}
