
import './App.css'
import Navbar from '../src//components/Navbar'
import Hero from './components/Hero'
import Feedback from './components/Feedback'
import Features from './components/Features'
import Preview from './components/Preview'
import SupportedBrwoser from './components/SupportedBrowsers'
import PluginFeatures from './components/PluginFeatures'

function App() {

  return (
    <div className="bg-[#0E0F1A] min-h-screen">
      <Navbar />
      <Hero />
      <Feedback />
      <Features />
      <Preview />
      <SupportedBrwoser />
      <PluginFeatures />
    </div>
  )
}

export default App
