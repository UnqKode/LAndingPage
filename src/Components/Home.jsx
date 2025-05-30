import { useState, useEffect } from 'react'
import Hero from './hero'
import About from './About'
import FreeApi from './FreeApi'
import Loader from './Loadder'
import Why from './Why'


function Home() {
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
     <Why />
     <About />
     <FreeApi />
   </div>
 )
}

export default Home