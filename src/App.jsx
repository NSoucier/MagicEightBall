import React, { useState } from 'react'
import EightBall from './components/EightBall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Magic Eight Ball</h1>
      <EightBall />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Ask, if you dare!
      </p>
    </>
  )
}

export default App
