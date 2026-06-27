import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Header changeUser={props.changeUser} data={props.data} />
        
        <div className="space-y-6">
          <TaskListNumbers data={props.data} />
          
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Assigned Tasks</h3>
            <TaskList data={props.data} updateTaskStatus={props.updateTaskStatus} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard