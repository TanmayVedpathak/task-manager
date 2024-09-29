import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SlideContext } from '../../pages/Register/Register';
import Eye from "../../assets/eye.svg"
import EyeClose from "../../assets/eye-off.svg"
import { LoginContext } from '../../App';

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();
    const { isLogin, setLogin } = useContext(LoginContext);
    const { slide, setSlide } = useContext(SlideContext);
    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleSignUp = (formData) => {
        fetch("http://127.0.0.1:4000/api/v1/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": formData.name,
                "email": formData.email,
                "password": formData.password
            }),
        })
            .then(response => response.json())
            .then(res => {
                if (res.success) {
                    reset();
                    // setSlide(false);
                    localStorage.setItem("token", res.token);
                    setLogin(true);
                    navigate("/");

                } else {
                    reset();
                    setError(res.data);
                    throw new Error(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <>
            <form className='signUpForm w-full flex-none px-6' onSubmit={handleSubmit(handleSignUp)}>
                <div className='flex flex-col gap-4'>
                    <div>
                        <label className='block text-white dark:text-black'>Enter Name:</label>
                        <input className='w-full px-2 py-1 border text-black dark:text-white bg-white dark:bg-black border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none rounded' type="text" name="name" placeholder='Enter Name' {...register("name", { required: true })} />
                    </div>
                    <div>
                        <label className='block text-white dark:text-black'>Enter Email:</label>
                        <input className='w-full px-2 py-1 border text-black dark:text-white bg-white dark:bg-black border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none  rounded' type="email" name="email" placeholder='Email Address' {...register("email", { required: true })} />
                    </div>
                    <div className='relative'>
                        <label className='block text-white dark:text-black'>Password:</label>
                        <input className='w-full px-2 py-1 border text-black dark:text-white bg-white dark:bg-black border-white dark:border-blue-400 focus:border-blue-400 focus:outline-none  rounded' type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder='Password' {...register("password", { required: true })} />
                        <img className='w-6 h-6 absolute top-1/2 right-2 cursor-pointer' src={showPassword ? EyeClose : Eye} alt="eye" onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <div className='flex justify-center'>
                        <button className='rounded bg-blue-500 hover:bg-blue-400 px-2 py-1 text-black text-sm' type='submit' disabled={isSubmitting}>Submit</button>
                    </div>
                </div>

                {
                    error &&
                    <p className='text-red-600'>{error}</p>
                }
            </form>
        </>
    )
}
