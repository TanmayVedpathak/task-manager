import React, { useState } from 'react';
import Eye from "../../assets/eye.svg"
import EyeClose from "../../assets/eye-off.svg"
import "./form.css";

export default function Form() {
    const [slide, setSlide] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleSlide = () => {
        setIsVisible(!isVisible);
    };
    return (
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
                <p className={`w-1/2 text-center z-[2] cursor-pointer ${isVisible && slide ? 'text-white dark:text-black' : 'text-black dark:text-white'}`} onClick={() => setIsVisible(false)}>SignUp</p>
                <p className={`w-1/2 text-center z-[2] cursor-pointer ${isVisible && slide ? 'text-black dark:text-white' : 'text-white dark:text-black'}`} onClick={() => setIsVisible(true)}>LogIn</p>
            </div>

            <div className={`w-full mb-4 flex transform transition-transform duration-500 gap-2 ${isVisible && slide ? '-translate-x-full' : 'translate-x-0'}`}>
                <form className='signUpForm w-full flex-none px-6'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <label className='block text-white dark:text-black'>Enter Name:</label>
                            <input className='w-full px-2 py-1 border bg-black dark:bg-white border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none rounded' type="text" name="name" placeholder='Enter Name' />
                        </div>
                        <div>
                            <label className='block text-white dark:text-black'>Enter Email:</label>
                            <input className='w-full px-2 py-1 border bg-black dark:bg-white border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none  rounded' type="email" name="email" placeholder='Email Address' />
                        </div>
                        <div className='relative'>
                            <label className='block text-white dark:text-black'>Password:</label>
                            <input className='w-full px-2 py-1 border bg-black dark:bg-white border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none  rounded' type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder='Password' />
                            <img className='w-6 h-6 absolute top-1/2 right-2 cursor-pointer' src={showPassword ? EyeClose : Eye} alt="eye" onClick={() => setShowPassword(!showPassword)} />
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded bg-blue-500 hover:bg-blue-400 px-2 py-1 text-black text-sm'>Submit</button>
                        </div>
                    </div>
                </form>

                <form className='logInForm w-full flex-none px-6'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <label className='block text-white dark:text-black'>Enter Email:</label>
                            <input className='w-full px-2 py-1 border bg-black dark:bg-white border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none  rounded' type="email" name="email" placeholder='Email Address' />
                        </div>
                        <div className='relative'>
                            <label className='block text-white dark:text-black'>Password:</label>
                            <input className='w-full px-2 py-1 border bg-black dark:bg-white border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none  rounded' type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder='Password' />
                            <img className='w-6 h-6 absolute top-1/2 right-2 cursor-pointer' src={showPassword ? EyeClose : Eye} alt="eye" onClick={() => setShowPassword(!showPassword)} />
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded bg-blue-500 hover:bg-blue-400 px-2 py-1 text-black text-sm'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}
