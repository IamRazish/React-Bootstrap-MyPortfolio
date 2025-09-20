import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'


const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Experience = lazy(() => import('./pages/Experience'))
const Contact = lazy(() => import('./pages/Contact'))
const Resume = lazy(() => import('./pages/Resume'))


export default function App() {
return (
<Layout>
<Suspense fallback={<div className="text-center py-5">Loading…</div>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/experience" element={<Experience />} />
<Route path="/contact" element={<Contact />} />
<Route path="/resume" element={<Resume />} />
<Route path="*" element={<Navigate to="/" />} />
</Routes>
</Suspense>
</Layout>
)
}