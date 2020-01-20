import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '@/layout/index.jsx'
import '@/icons/index'

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
