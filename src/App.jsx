import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import ToogleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1>React + Vite</h1>
      <img src={reactLogo} alt="React Logo" />
      <img src={viteLogo} alt="Vite Logo" />
      <Card title="Card Title" description="Card Description" />
      <Counter count={count} setCount={setCount} />
      <h2>Toggle button</h2>
      <ToogleButton />
      <h2>Name form</h2>
      <NameForm/>
      <h2>Counter with effect console log</h2>
      <CounterWithEffect />

    </section>
  )
}

export default App
