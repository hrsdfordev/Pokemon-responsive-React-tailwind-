import React from 'react'

const CardMenu = (props) => {
  return (
    <div className='transform hover:scale-105 md:hover:mt-2 mb-2 bg-gray-200 hover:bg-gray-300 md:mb-5 border border-gray-300 rounded-md  w-[45%]   md:w-[23%] lg:w-[23%] '>
        <div className='flex flex-col items-center justify-center'>
            <img className='p-5 mx-auto ' src={props.avatar} alt="" width={200}/>
            <h1 className='font-bold text-xl text-blue-400'>{props.title}</h1>
            <h1 className='p-5 font-semibold text-gray-700'>{props.detail}</h1>
        </div>
    </div>
  )
}

export default CardMenu