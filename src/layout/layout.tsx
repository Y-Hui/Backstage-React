import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar/index'
import AppContent from './AppContent/index'
import Navbar from './Navbar/index'

const LayoutProps = {
  children: PropTypes.node
}
type Props = PropTypes.InferProps<typeof LayoutProps>

export default function Layout(props:Props) {
  const { children } = props
  return (
    <>
      <Sidebar />
      <AppContent>
        <Navbar />
        {children}
      </AppContent>
    </>
  )
}
