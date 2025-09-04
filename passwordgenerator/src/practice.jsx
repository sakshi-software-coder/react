import { useState, useCallback,useEffect,useRef} from 'react'
import './App.css'
function Practice(){
    const [length,setLength]=useState(8);
    const [numAllow,setNumAlloud]=useState(false);
    const [char,setChar]=useState(false)
    const [pass,setPass]=useState("")
    const passref=useRef(null)
    const setPassGen=useCallback(()=>{
        let pas=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numAllow){
            str+="0987654321"
        }
        if(char)
        {
            str+="_)(*&^%$#@!:{|\/><.,}"
        }
        for(let i=0; i<length; i++)
        {
          let index=Math.floor(Math.random()*str.length)
          pas+=str.charAt(index)
        }
        setPass(pas)
    },[length,numAllow,char])

  useEffect(() => {
    setPassGen();
  }, [length,numAllow,char,setPassGen]);
const copyToClipBoard=()=>{
passref.current?.select();
 passref.current?.setSelectionRange(0,pass.length);
window.navigator.clipboard.writeText(pass);
  alert("Password copied: " + pass);
}
    return(
        <>
        <h2 className='bg-green-600 rounded-2xl text-white text-5xl p-10 capitalize'>Password generator</h2>
       {/* password generator body part  */}
        <div className='bg-gray-600 rounded-2xl mt-4 p-10  text-white'>

{/* input and copy button div */}
<div className='flex'>
    
    <input type="text" ref={passref} readOnly value={pass}  className='bg-amber-50 rounded-md text-black w-full p-2' />

    <button onClick={copyToClipBoard} className='bg-amber-200 text-blue-700'>Copy</button>
</div>

{/* slider/number/charcter feild */}
<div className='flex mt-2 gap-7 text-3xl'>

<input type="range"
min={8}
max={100}
className='cursor-pointer'
onChange={(e)=>{setLength(e.target.value)}}
/>
<lable>Length:{length}</lable>
 <input type="checkbox" 
 defaultChecked={numAllow}
 onChange={()=>{setNumAlloud(prev=>!prev)}}


 className='cursor-pointer'/>Number
 <input type="checkbox" 
 defaultChecked={char}
id="charInput"
onChange={()=>{setChar(prev=>!prev)}}
 className='cursor-pointer'/>Character
</div>

        </div>
        </>
    )
}
export default Practice;