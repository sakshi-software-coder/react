import React, { useId } from 'react'
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,    
    className = "",


}) 

{
   
const amountInputId=useId()
    return (
        <div className={`bg-green-200 p-3 rounded-lg text-xl text-black flex shadow-2xl ${className}`}>
            <div className="w-1/2 flex flex-wrap">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    id={amountInputId}
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className=" w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                    disabled={currencyDisable}
                >
                    
{currencyOptions.map((c)=>(<option key={c} value={c}>
    {c}
</option>))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
