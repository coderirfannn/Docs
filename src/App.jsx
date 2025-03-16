import React from 'react'
import Bacground from './components/Bacground'
import FourGround from './components/FourGround'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800   '>
      <Bacground></Bacground>
      <FourGround></FourGround>
      <div className='fixed z-[3] top-0 left-0 w-full h-full '></div>
    </div>
  )
}

export default App