import { useState } from 'react'
import Hero from './Components/hero'
import About from './Components/About'
import FreeApi from './Components/FreeApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black overflow-hidden'> 
      <Hero />
      <About />
      <FreeApi />
    </div>
  )
}

export default App
