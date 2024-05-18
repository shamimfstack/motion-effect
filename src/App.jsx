
import './App.css'
import Navbar from '../src//components/Navbar'
import Hero from './components/Hero'
import Feedback from './components/Feedbac'
import Features from './components/Features'

function App() {

  return (
    <div className="bg-[#0E0F1A] min-h-screen">
      <Navbar />
      <Hero />
      <Feedback />
      <Features />
    </div>
  )
}

export default App
