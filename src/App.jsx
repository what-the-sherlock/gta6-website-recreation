import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
import FirstVideo from './sections/FirstVideo';

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <main>
      <NavBar/>
      <Hero/>
      <FirstVideo/>
    </main>
  )
}

export default App
