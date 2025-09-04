import { useState, useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLenth] = useState(8)
const[numberAllowed,setNumberAllowed]=useState(false)
const[charAllowed,setCharAllowed]=useState(false)
const passwordRef=useRef(null)

const [password,setPassword]=useState("");
const passwordGenerator=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed) str +="0123456789";
if(charAllowed) str +="!@#$%^&*()";
for (let i = 0; i<length; i++) {
  let char=Math.floor((Math.random()*str.length)+1)
  console.log(char);
  
 pass+=str.charAt(char) 
}
setPassword(pass)

}, [length,numberAllowed,charAllowed,setPassword]);

const copyPasswordToClip=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101);

window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])


  return (
<>

<h1 className='bg-green-800 p-4 rounded-xl capitalize text-white'>password generator</h1>
  <div className='bg-amber-700 p-7 mt-4 text-white rounded-xl w-full'>

<div className='flex gap-2 '>
          < input type="text"
           placeholder='password'
           value={password}
           readOnly
           className='outline-none bg-white w-full rounded-2xl p-3 text-amber-900
           '
           ref={passwordRef}
           />
    <button onClick={copyPasswordToClip}className='bg-blue-700 text-amber-600 outline-none'>Copy</button>
</div>

<div className='flex m-3 outline-none gap-3'>
  <div>
<input type="range"
min={8}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=>{setLenth(e.target.value)}}
/>    
<label>Length:{length}</label>
</div>
  <div className='flex gap-2'>
  <input type="checkbox"
defaultChecked={numberAllowed}
id="numberInput"
onChange={()=>{setNumberAllowed(prev=>!prev)}}
/>    
<label>Number</label>

  <input type="checkbox"
defaultChecked={charAllowed}
id="charInput"
onChange={()=>{setCharAllowed(prev=>!prev)}}
/>    
<label>Character</label>
    
</div>

</div>

</div>
</>
  )
}

export default App
