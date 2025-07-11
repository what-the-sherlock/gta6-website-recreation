import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <main>
      <NavBar/>
      <Hero/>
    </main>
  )
}

export default App
