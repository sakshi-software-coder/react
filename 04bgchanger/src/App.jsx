import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className='flex flex-wrap gap-3 justify-center shadow-lg bg-white px-3 py-2 rounded-2xl'>
    <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-full bg-red-600 text-white'>red</button>
    <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white'>blue</button>
    <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full bg-pink-600 text-white'>pink</button>
    <button onClick={()=>setcolor("yellow")} className='outline-none px-4 py-1 rounded-full bg-yellow-600 text-white'>yellow</button>
    <button onClick={()=>setcolor("purple")} className='outline-none px-4 py-1 rounded-full bg-purple-600 text-white'>purple</button>
    <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full bg-pink-600 text-white'>pink</button>
    <button onClick={()=>setcolor("orange")} className='outline-none px-4 py-1 rounded-full bg-orange-600 text-white'>orange</button>
    <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full bg-green-600 text-white'>green</button>
  </div>
</div>



    </div>
  )
}

export default App
