import React from 'react'
import './index.scss'

const AppContent:React.FC = (props:React.PropsWithChildren<any>) => {
  const { children } = props

  return (
    <main className="app-content">
      {children}
    </main>
  )
}

export default AppContent
