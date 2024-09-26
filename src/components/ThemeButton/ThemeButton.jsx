import { useContext } from 'react';
import { ThemeContext } from '../../App';
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

export const ThemeButton = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);

    function toggleTheme() {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
            localStorage.setItem("isDarkTheme", false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
            localStorage.setItem("isDarkTheme", true);
        }
    };

    return (
        <div className='w-max bg-black dark:bg-white p-2 rounded-full fixed top-6 right-6 cursor-pointer' onClick={toggleTheme}>
            <img className='w-[16px] h-[16px]' src={isDark ? Moon : Sun} alt={isDark ? "Moon" : "Sun"} />
        </div>
    )
}
