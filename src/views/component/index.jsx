import React from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'react-router-dom'
import { RouterView } from '@/router.jsx'

function ComponentDemo({ routes }) {
  return (
    <Switch>
      {
        routes.map((route) => (
          <RouterView key={route.path} {...route} />
        ))
      }
    </Switch>
  )
}
ComponentDemo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  routes: PropTypes.array.isRequired
}

export default ComponentDemo
