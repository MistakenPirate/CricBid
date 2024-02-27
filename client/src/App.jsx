import React, { useState } from 'react'
import Products from './Products'

function App() {
  var [a,b] = useState(69);
  return (
    <>
    <div className='w-full h-screen p-4 bg-zinc-900'>
      <div className='w-44 h-32 rounded-xl bg-red-600'>
        <h1>{a}</h1>
      </div>
        <button className='px-3 py-1 big-green-500 rounded-md text-xs'>click</button>
      {/* <Products/> */}
    </div> 
    </>
  )
}

export default App