import { ResultDisplay } from './components/ResultDisplay'
import { InputFields } from './components/InputFields'
import { Warning } from './components/Warning'
import { RandomColor } from './components/RandomColor'
import { Text } from './components/Text'
import { Wrapper } from './components/Wrapper'
import './App.css'
import { useState } from 'react'

function App() {
  const [sum, setSum] = useState(null)
  const [message, setMessage] = useState("")
  return (
    <>
      <h2>Task 1</h2>
      < InputFields setSum={setSum} />
      <ResultDisplay sum={sum} />
      <h2>task 2</h2>
      <Warning />
      <h2>Task 3</h2>
      <RandomColor />
      <h2>Task 4</h2>
      <Text />
      <h2>Task 5</h2>
      <Wrapper message={message} setMessage={setMessage} />

    </>
  )
}

export default App

