import { useState } from 'react'
import { Outlet , ScrollRestoration } from 'react-router-dom'
import './index.css'



function App() {

  return (
    <>  
     
      <Outlet />
      <ScrollRestoration/>  
    </> 
  )
}

export default App
