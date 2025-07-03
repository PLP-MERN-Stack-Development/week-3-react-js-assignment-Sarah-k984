import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
   const handleClick = () => {
    alert('Button clicked!');

  return (
    <>
      <div className="p-6">
      <Button onClick={handleClick}>Click Me</Button>
    </div>
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">Hello, Tailwind!</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
