import React, { useEffect } from 'react'
import { usePokemon } from '../contexts'

const About = () => {
  const {toggleMenuBack , toggleMenu} = usePokemon()
  useEffect(()=> {
    toggleMenuBack(false)
  },[])
  return (
    <div className='w-screen h-screen bg-gray-400'>About</div>
  )
}

export default About