import { useState } from 'react'
import { Outlet , ScrollRestoration, useParams } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header.jsx';



function App() {
  
  return (
    <>     
      <div className='bg-custom-gradient h-[500px]'>
        <Header />
        <Outlet/>
      </div>
      <ScrollRestoration/>  
    </> 
  )
}

export default App
