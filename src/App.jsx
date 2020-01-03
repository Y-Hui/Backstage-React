import React from 'react'
import Router from './Router'
import Sidebar from '@/layout/Sidebar/index.jsx'
import AppContent from '@/layout/AppContent/index.jsx'
import Navbar from '@/layout/Navbar/index.jsx'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <AppContent>
        <Navbar />
        <Router />
      </AppContent>
    </div>
  )
}

export default App
