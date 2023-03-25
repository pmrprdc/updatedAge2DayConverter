import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [age, setAge] = useState("")
  const [display, setDisplay] = useState("")
  

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setAge(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const age1 = parseInt(age) * 365;
    setDisplay(age1)
    setAge("")
    
  }

  const restartHandler = (e) => {
    setAge("")
    setDisplay("")
  }
 
  return (
    <div className="App">
      <h1>{display}</h1>
      <h1>How old are you?</h1>
      <form onSubmit={submitHandler}>
        <input type="submit" value="submit"/>
        <input value={age} onChange={inputChangeHandler} type="text"/>
      </form>
      <button onClick={restartHandler} style={{
        color : "red", backgroundColor:"blue"}}>Restart</button>
    </div>
  )
}

export default App
