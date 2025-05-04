import { Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import About from './routes/about'
import Publications from './routes/publications'
import Projects from './routes/projects'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )
} 