import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Sidebar from '@/layout/Sidebar/index.jsx'
import AppContent from '@/layout/AppContent/index.jsx'
import Navbar from '@/layout/Navbar/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <AppContent>
        <Navbar />
        <Router />
      </AppContent>
    </BrowserRouter>
  )
}

export default App
