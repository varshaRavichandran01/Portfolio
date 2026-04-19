import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
const App = () => {
  return (
    <div>
      
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App