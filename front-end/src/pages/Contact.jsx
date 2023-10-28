import React, { useEffect } from 'react'
import { usePokemon } from '../contexts'


const Contact = () => {
  const {toggleMenuBack , toggleMenu} = usePokemon()
  useEffect(()=> {
    toggleMenuBack(false)
  },[])
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className=''>
        Contact Pages
      </div>
    </div>
  )
}

export default Contact