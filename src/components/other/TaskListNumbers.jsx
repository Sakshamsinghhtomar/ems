import React from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <Card className="hover:border-blue-200/80 hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500">New Tasks</span>
          <Badge variant="info">New</Badge>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mt-3">{data.taskCounts.newTask}</h2>
      </Card>
      
      <Card className="hover:border-emerald-200/80 hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500">Completed Tasks</span>
          <Badge variant="success">Completed</Badge>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mt-3">{data.taskCounts.completed}</h2>
      </Card>

      <Card className="hover:border-amber-200/80 hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500">Accepted Tasks</span>
          <Badge variant="warning">Active</Badge>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mt-3">{data.taskCounts.active}</h2>
      </Card>

      <Card className="hover:border-rose-200/80 hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500">Failed Tasks</span>
          <Badge variant="danger">Failed</Badge>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mt-3">{data.taskCounts.failed}</h2>
      </Card>
    </div>
  )
}

export default TaskListNumbers