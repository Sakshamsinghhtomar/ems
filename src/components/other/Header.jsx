import React from 'react'
import Button from '../ui/Button'

const Header = (props) => {
  const username = props.data ? props.data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <header
      className="flex items-center justify-between pb-5"
      style={{ borderBottom: '1px solid #30363D' }}
    >
      <div>
        <p
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: '#8B949E' }}
        >
          Dashboard
        </p>
        <h1
          className="text-2xl font-extrabold tracking-tight mt-0.5"
          style={{ color: '#F0F6FC' }}
        >
          Welcome back,{' '}
          <span style={{ color: '#58A6FF' }}>{username}</span>
        </h1>
      </div>
      <Button variant="danger" size="sm" onClick={logOutUser}>
        Log Out
      </Button>
    </header>
  )
}

export default Header