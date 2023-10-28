import React, { useEffect } from 'react'
import { usePokemon } from '../contexts'

const About = () => {
  const {toggleMenuBack , toggleMenu} = usePokemon()
  useEffect(()=> {
    toggleMenuBack(false)
  },[])
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className=''>
        About Pages
      </div>
    </div>
  )
}

export default About