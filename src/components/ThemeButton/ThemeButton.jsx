import { useEffect, useState } from 'react';
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

export const ThemeButton = () => {
    const [isDark, setIsDark] = useState(false);

    function toggleTheme() {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    };

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);
    return (
        <div className='w-max bg-black dark:bg-white p-2 rounded-full fixed top-2 right-2'>
            <img className='w-[16px] h-[16px]' src={isDark ? Moon : Sun} alt="" onClick={toggleTheme} />
        </div>
    )
}
