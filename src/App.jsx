import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, DetailPage } from './pages/index.js'
import { Navbar} from "./components/index.js";

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/country/:id'} element={<DetailPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
