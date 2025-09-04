import { useEffect,useState } from "react";

function usecustomHookForCurrency(currency)
{
    const[data,setdata]=useState({})
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-09-01/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setdata(res[currency]))
},[currency])
    console.log(data);
    return data
}

export default usecustomHookForCurrency;
