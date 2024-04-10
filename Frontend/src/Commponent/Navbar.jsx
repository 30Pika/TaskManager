import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-800 py-4 ">
        <div class="container mx-auto flex justify-center items-center px-4">
          <div className="flex gap-2 items-center">
            <i class='bx bx-notepad text-emerald-400 text-4xl font-bold'></i>
            <span className='text-4xl font-medium text-emerald-400 font-red-hat'>Task Manger</span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
