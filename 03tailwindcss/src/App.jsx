import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<h1 className="bg-green-400 text-white p-4 rounded-xl mb-4">Tailwind test</h1>
<Card userName="sakshi" btnText="click me"/>
<Card userName="kajal" btnText="visit me"/>
</>
  )
}

export default App
