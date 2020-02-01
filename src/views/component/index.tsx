import React from 'react'
import { Switch } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'
import { RouterView } from '@/router.tsx'

function ComponentDemo(props:RouteConfig) {
  const { routes } = props

  return (
    <Switch>
      {
        routes!.map((route:RouteConfig) => (
          <RouterView key={route.path?.toString()} {...route} />
        ))
      }
    </Switch>
  )
}

export default ComponentDemo
