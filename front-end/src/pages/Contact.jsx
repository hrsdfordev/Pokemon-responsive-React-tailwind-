import React, { useEffect } from 'react'
import { usePokemon } from '../contexts'


const Contact = () => {
  const {toggleMenuBack , toggleMenu} = usePokemon()
  useEffect(()=> {
    toggleMenuBack(false)
  },[])
  return (
    <div className='w-screen h-screen bg-gray-400 '> Contact </div>
  )
}

export default Contact