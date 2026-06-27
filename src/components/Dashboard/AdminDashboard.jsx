import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#0D1117' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Header changeUser={props.changeUser} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left panel: Task creation form */}
          <div
            className="lg:col-span-1 rounded-xl p-6"
            style={{
              backgroundColor: '#161B22',
              border: '1px solid #30363D',
            }}
          >
            <CreateTask />
          </div>

          {/* Right panel: Employees list & task overview */}
          <div
            className="lg:col-span-2 rounded-xl p-6"
            style={{
              backgroundColor: '#161B22',
              border: '1px solid #30363D',
            }}
          >
            <AllTask />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard