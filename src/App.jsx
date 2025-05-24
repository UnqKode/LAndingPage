import { useState, useEffect } from 'react'
import Hero from './Components/hero'
import About from './Components/About'
import FreeApi from './Components/FreeApi'
import Loader from './Components/Loadder'

function App() {
 const [count, setCount] = useState(0)
 const [loading, setLoading] = useState(true)

 useEffect(() => {
   const timer = setTimeout(() => {
     setLoading(false)
   }, 2000)

   return () => clearTimeout(timer)
 }, [])

 if (loading) {
   return <Loader />
 }

 return (
   <div className='bg-black overflow-hidden'> 
     <Hero />
     <About />
     <FreeApi />
   </div>
 )
}

export default App