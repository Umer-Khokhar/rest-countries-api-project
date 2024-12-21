import { images } from '../constants'
import { useTheme } from "./";

const Navbar = () => {

    const {theme, toggleTheme} = useTheme();
    return (
        <div className='navbar bg-white py-5 md:px-12 px-3 flex justify-between w-full dark:bg-navBg dark:text-gray-50'>
            <h1 className={'md:text-2xl text-xl font-bold'}>Where in the World?</h1>
            <div className="dark-mode-toggle flex items-center gap-2 cursor-pointer" onClick={toggleTheme}>
                <img className="dark:invert" src={theme !== "dark" ? images.darkMode : images.lightMode} alt="dark-mode-icon" width={20} height={20} />
                <p className={'md:font-semibold'}>{theme === 'dark' ? "Light Mode" : "Dark Mode"}</p>
            </div>
        </div>
    );
};

export default Navbar;