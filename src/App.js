import React from 'react';
import Router from './Router';
import Sidebar from '@/layout/Sidebar/index';
import AppContent from '@/layout/AppContent/index';
import Navbar from '@/layout/Navbar'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <AppContent>
        <>
        <Navbar />
        <Router />
        </>
      </AppContent>
    </div>
  )
}

export default App;
