import React from 'react'

function ComponentDemo(props:any) {
  const { children } = props
  return (
    <>
      {children}
    </>
  )
}

export default ComponentDemo
