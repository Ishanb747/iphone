import { useState } from 'react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'

const  App = () => {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-black">
      
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>



    </main>
)
}

export default App
