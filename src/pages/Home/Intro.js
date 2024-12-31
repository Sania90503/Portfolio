import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 '>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className=' sm:text-3xl lg:text-5xl xl:text-7xl  text-secondary font-semibold' >
        Sania Khatri</h1>
      <h1 className='text-6xl sm:text-2xl lg:text-4xl xl:text-7xl text-white font-semibold'>Aspiring Full-Stack Developer</h1>
      <p className="text-white w-2/3">I am a Software developer with a Master's in Computer Applications and hands-on experience in full-stack development. As a dynamic Software Developer, I specialize in React.js and am dedicated to building userfriendly applications.</p>
      <button className="border-2 border-secondary text-secondary px-10 py-3 rounded">Get Started</button>
    </div>
  )
}

export default Intro
