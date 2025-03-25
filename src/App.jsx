import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1>React + Vite</h1>
      <img src={reactLogo} alt="React Logo" />
      <img src={viteLogo} alt="Vite Logo" />
      <Card title="Card Title" description="Card Description" />
      <Card title="Card Title 2" description="Card Description 2" />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </section>
  )
}

export default App
