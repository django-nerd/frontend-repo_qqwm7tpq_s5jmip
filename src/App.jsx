import Home from './Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import { Routes, Route } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  )
}

export default AppRouter
