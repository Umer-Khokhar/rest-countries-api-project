import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FetchContext ,ThemeContext} from "./components/";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContext>
            <FetchContext>
                <App/>
            </FetchContext>
        </ThemeContext>
    </StrictMode> ,
)
