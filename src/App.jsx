import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SigningBoard from './component/SigningBoard'

function App() {

  return (
    <>
    <div className="Container">
      <h1 className='text-center'>Signature Board</h1>
      <SigningBoard/>
    </div>
    </>
  )
}

export default App
