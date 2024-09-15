import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-zinc-800 w-full p-4'>
        <div className=' flex gap-10  justify-center items-center text-xl/2'>
        <a className='nav transform transition duration-300 hover:scale-110 font-semibold mr-4 drop-shadow-8xl' href="">Home</a>
        <a className='nav transform transition duration-300 hover:scale-110 font-semibold mr-4 drop-shadow-8xl' href="">About</a>
        <a className='nav transform transition duration-300 hover:scale-110 font-semibold mr-4 drop-shadow-8xl' href="">Contact</a>
        <a className='nav transform transition duration-300 hover:scale-110 font-semibold mr-4 drop-shadow-8xl' href="">Product</a>
        <a className='nav transform transition duration-300 hover:scale-110 font-semibold mr-4 drop-shadow-8xl' href="">Contact</a>
        <a className='nav transform transition duration-300 hover:scale-110 font-semibold mr-4 drop-shadow-8xl' href="">Product</a>
        </div>
      
    </div>
  )
}

export default Navbar
