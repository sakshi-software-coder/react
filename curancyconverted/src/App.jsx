import { useEffect, useState ,useId } from 'react'
import {InputBox} from './component'
import usecustomHookForCurrency from './hooks/customHookForCurrency.js'
function App() {

/*const [amount,setAmount]=useState(1)
const [fromCurrency,setFromCurrency]=useState("USD")
const [toCurrency,setToCurrency]=useState("INR")
const [convert,setConvert]=useState(null)
const clickedConvert=()=>{
let inr=80;
if(fromCurrency==="USD" && toCurrency==="INR")
{
setConvert(amount*inr);
}
else if(fromCurrency==="INR" && toCurrency==="USD"){
   setConvert(amount/inr);
}
else{
  setConvert(amount);
}
}

const handleSwipe=()=>{
  setFromCurrency(toCurrency);
setToCurrency(fromCurrency);
}
 */

{/* 
  return (
    <div className="w-full mx-auto bg-gray-200 p-10 rounded-2xl shadow-2xl">
      <h3 className="text-2xl font-bold mb-4 text-center">Currency Converter</h3>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)}}
          placeholder="Enter amount"
          className="border p-2 rounded w-1/2"
        />
        <select
         value={fromCurrency}
          onChange={(e)=>{setFromCurrency(e.target.value)}}
        className="border p-2 rounded w-1/2">
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
        </select>
      </div>

      <div onClick={handleSwipe} className=" justify-center mb-4">
        <button  className="bg-gray-200 px-3 py-1 rounded-full shadow hover:bg-gray-300">
          🔄
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={convert||""}
          readOnly
          placeholder="Converted amount"
          className="border p-2 rounded w-1/2"
          disabled
        />
        <select
                 value={toCurrency}
          onChange={(e)=>{setToCurrency(e.target.value)}}
        className="border p-2 rounded w-1/2">
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>

      <button
      onClick={clickedConvert}
      className="bg-blue-600 text-black w-full py-2 rounded-lg shadow hover:bg-blue-700">
        Convert
      </button>
    </div>
 );
  */}


const [amount,setAmount]=useState(0);
const [from,setFrom]=useState("usd")
const [to,setTo]=useState("inr")
const [convertedAmount,setConvertedAmount]=useState(0)

const currencyInfo=usecustomHookForCurrency(from);
const options = Object.keys(currencyInfo)
const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
  }

const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
}




return (
  <>
  <div  className="flex">
  <div className='w-1/2 h-screen bg-cover bg-no-repeat flex-wrap justify-center items-center' style={{backgroundImage:`url('https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg')`,}}></div>
        <div
            className="w-1/2 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(amount)=>{setAmount(amount)}}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="t"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  </div>


  </>      
    );


}
export default App;
