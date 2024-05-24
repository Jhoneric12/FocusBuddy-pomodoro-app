import React from 'react'

function Navbar() {
  return (
    <nav className='py-6 px-10 flex justify-between md:justify-around md:px-0 md:fixed w-full'>
        <h1 className='text-xl md:text-2xl text-font-color font-extrabold select-none'>
            Focus<span className='text-secondary-color'>Buddy</span>
        </h1>
        <div>
        </div>
    </nav>
  )
}

export default Navbar