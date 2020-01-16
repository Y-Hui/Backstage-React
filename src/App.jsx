import React from 'react'
import Router from './Router'
import Sidebar from '@/layout/Sidebar/index.jsx'
import AppContent from '@/layout/AppContent/index.jsx'
import Navbar from '@/layout/Navbar/index.jsx'

function App() {
  return (
    <>
      <Sidebar />
      <AppContent>
        <Navbar />
        <Router />
      </AppContent>
    </>
  )
}

export default App
