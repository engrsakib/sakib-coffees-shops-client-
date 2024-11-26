import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Headder from './components/Headder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headder></Headder>
      {/* dynamic section */}
     <section>
      <Outlet></Outlet>
     </section>
      
    </>
  )
}

export default App
