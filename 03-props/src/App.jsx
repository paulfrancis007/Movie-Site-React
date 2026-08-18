import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user = "Paul Francis" age = {30} img='https://images.unsplash.com/photo-1785706134100-c839b7adfdf8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user = "John Doe" age = {25} img='https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8'/>
    </div>
  )
}

export default App
