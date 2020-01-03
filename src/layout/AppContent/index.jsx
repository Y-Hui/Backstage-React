import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function AppContent(props) {
  const { children } = props
  return (
    <main className="app-content">
      {children}
    </main>
  )
}

AppContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default AppContent
