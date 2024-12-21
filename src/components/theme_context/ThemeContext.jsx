import {useState, useEffect, createContext, useContext} from 'react';

const ThemeContextProvider = createContext();
export const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    })

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }
    return (
        <ThemeContextProvider.Provider value={{ toggleTheme, theme, setTheme }}>
            {children}
        </ThemeContextProvider.Provider>
    );
};

export const useTheme = () => useContext(ThemeContextProvider)