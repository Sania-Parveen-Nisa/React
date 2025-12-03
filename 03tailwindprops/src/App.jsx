import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App() {
  const [count, setCount] = useState(0)
  const myobj = {name: "ariyan" , age: 20}

  const arr = [20 , "Engineer"]

  return (
    <>
    <h1 className='bg-green-900 mb-4'>Tailwind Css</h1>
    <Card username ="sayan patra"  EnterBtn ="See more" details = {arr}/> 
    <Card/>
    </>
  )
}

export default App



