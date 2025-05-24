import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Root from "./pages/Root"
import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import GenerateResume from './pages/GenerateResume'
import Choice from './pages/Choice'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} /> {/* ✅ This sets Home as the default */}
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="resume" element={<Resume />} />
    <Route path="contact" element={<Contact />} />
    <Route path="generate-resume" element={<GenerateResume />} />
    <Route path="choose" element={<Choice/>}/>
  </Route>
</Routes>

    </BrowserRouter>
  </StrictMode>
);