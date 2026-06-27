import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Card from '../ui/Card'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div
      className="flex min-h-screen w-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#0D1117' }}
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ backgroundColor: '#161B22', border: '1px solid #30363D' }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="#58A6FF"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h2
            className="mt-6 text-3xl font-extrabold tracking-tight"
            style={{ color: '#F0F6FC' }}
          >
            Welcome back
          </h2>
          <p className="mt-2 text-sm" style={{ color: '#8B949E' }}>
            Manage tasks, collaborate, and track progress
          </p>
        </div>

        <Card
          className="p-8"
          style={{
            backgroundColor: '#161B22',
            border: '1px solid #30363D',
            borderRadius: '12px',
          }}
        >
          <form onSubmit={submitHandler} className="space-y-5">
            <Input
              id="email"
              type="email"
              label="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Input
              id="password"
              type="password"
              label="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="w-full flex justify-center items-center mt-6 px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
              style={{ backgroundColor: '#3FB950', color: '#0D1117' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2EA043')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3FB950')}
            >
              Sign In
            </button>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default Login