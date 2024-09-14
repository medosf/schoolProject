import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/home'

function App() {
  const [data, setData] = useState([])
  const triggerGet = async () => {
    try {
      const response = await fetch('http://localhost:3000/api')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(() => {
  triggerGet();
}, [])
  return (
    <>
      welcome
      <Home />
    </>
  )
}

export default App
