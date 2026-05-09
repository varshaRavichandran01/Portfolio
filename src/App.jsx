import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import AchievementsPage from './pages/Achievements/AchievementsPage';
import ScrollToTop from "./components/ScrollToTop";
import LearningPage from './pages/Learning/Learning';
import Notes from './pages/Notes/Notes';
import Contact from './pages/Contact/Contact';
import Reflections from './pages/Reflections/Reflections';
const App = () => {
  return (
    <div>
      
       <BrowserRouter>
       <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/achievements" element={<AchievementsPage/>} />
          <Route path="/learning" element={<LearningPage/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/reflections" element={<Reflections/>} />
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App