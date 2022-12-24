import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return <h1>Hello React!</h1>
}

const container = document.getElementById('app')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}
