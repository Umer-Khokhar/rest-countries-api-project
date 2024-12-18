import {useState} from 'react';
import { images } from '../constants'

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const toggleDark = () => setIsDark(!isDark);
    return (
        <div className='navbar bg-white py-5 md:px-12 px-3 flex justify-between w-full'>
            <h1 className={'md:text-2xl text-xl font-bold'}>Where in the World?</h1>
            <div className="dark-mode-toggle flex items-center gap-2 cursor-pointer" onClick={toggleDark}>
                <img src={!isDark ? images.darkMode : images.lightMode} alt="dark-mode-icon" width={20} height={20} />
                <p className={'md:font-semibold'}>{isDark ? "Light Mode" : "Dark Mode"}</p>
            </div>
        </div>
    );
};

export default Navbar;