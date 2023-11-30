import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'


function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const[to , setTo] = useState("inr")
  const [convertedAmount , setCovertedAmount] = useState(0)
  const currencyInfo = useCurrencyinfo(from)
  const options = Object.keys(currencyInfo)
  
  const swap = ()=>{
    setFrom(to)
    setTo(from)
  }

  const convert = ()=>{
    setCovertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
    className='w-full h-screen flex flex-wrap p-5 justify-center item-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url('https://t3.ftcdn.net/jpg/04/34/58/54/360_F_434585463_zpdtTpTEbqQFfsp6RVEW6IIxEM9dHf86.jpg')`,
  }}>
    <div className='w-full '>
      <div className=' max-w-md mx-auto border-gray-60 rounded-xl p-5 backdrop-blur-md text-center text-2xl my-5 '><div className='bg-blue-600 p-2 rounded-lg text-white'>Currency Converter</div></div>
      <div className='w-full max-w-md mx-auto border-gray-60 rounded-xl p-5 backdrop-blur-md bg-white/30'>
        <form
        onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}>
          <div className='w-full mb-1'>
              <InputBox
              label="From"
              amount={amount}
              selectCurrency={from}
              onCurrencyChange={(currency)=>(setFrom(currency))}
              currencyOptions = {options}
              onAmountChange={(amount)=> setAmount(amount)}
              />
          </div>
          <div className='relative w-full h-0.5'>
            <button
            type='button'
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  border-white rounded-lg bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
            ><img className='h-7 w-7' src='https://cdn.icon-icons.com/icons2/2248/PNG/96/swap_vertical_variant_icon_138130.png' /></button>
            </div>
            <div className='w-full mt-1 mb-4'>
                <InputBox
                label="To"
                amount = {convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setTo(currency)}
                selectCurrency={to}
                amountDisable
                />
            </div>
            <button
            type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
          
        </form>
      </div>
    </div>
    </div>
  )
}

export default App
