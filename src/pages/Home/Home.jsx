import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    let navigate = useNavigate();

    useEffect(() => {
        // navigate('/home');
    }, []);

    return (
        <div className=''>Home</div>
    )
}
