import React from 'react'
import NavItem from './components/NavItem'
import './index.scss'

interface NavListType {
  [propName:string]: {
    name: string
    to: string
    active?: boolean
  }
}

function Navbar() {
  const NavList:NavListType = {
    home: {
      name: '首页',
      to: '',
      active: true
    },
    profile: {
      name: '个人中心',
      to: ''
    },
    demo: {
      name: '组件演示',
      to: ''
    },
    todo: {
      name: '代办事项',
      to: ''
    }
  }
  return (
    <nav className="nav-bar">
      {
        Object.keys(NavList).map((key) => {
          const item = NavList[key]
          return (
            <NavItem
              name={item.name}
              key={key}
              active={item.active || false}
            />
          )
        })
      }
    </nav>
  )
}

export default Navbar
