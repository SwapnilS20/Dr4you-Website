import { useState } from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=" h-screen bg-custom-gradient flex  flex-row items-center justify-center " >
     <button className='w-[230px] h-[56px] bg-btn-gradient rounded-lg  text-neutral-100 text-2xl font-general-sans font-bold'>
     Join us 
     </button>
     <button className='w-[230px] h-[56px] bg-btn-gradient rounded-lg  text-neutral-100 text-2xl font-general-sans font-medium'>
     Join us 
     </button>
     <button className='w-[230px] h-[56px] bg-btn-gradient rounded-lg  text-neutral-100 text-2xl font-manrope font-regular'>
     Join us 
     </button>
     
      
      
      </div> 
     
    
    </>
  )
}

export default App
