import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card/Card2'
import Counter from './components/Counter'
import ToogleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'
import StaticComponent from './components/StaticComponent/StaticComponent'
import Userlist from './components/DinamicComponent/DinamicComponent'

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
      <h2>Card with a different css</h2>
      <Card2 title="Card Title" description="Card Description" cssClass="card2" />

      <StaticComponent />
      <Userlist />


    </section>
  )
}

export default App
