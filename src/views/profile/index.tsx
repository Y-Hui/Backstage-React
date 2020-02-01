import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

function Profile() {
  return (
    <div className="profile">
      <h2>个人中心</h2>
      <Link to="/home">返回主页</Link>
    </div>
  )
}
export default Profile
