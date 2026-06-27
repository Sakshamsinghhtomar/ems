import React from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const FailedTask = ({ data }) => {
  return (
    <Card className="flex flex-col justify-between hover:shadow-md transition-all duration-200">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Badge variant="primary">{data.category}</Badge>
          <span className="text-xs font-semibold text-slate-400">{data.taskDate}</span>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900 tracking-tight">{data.taskTitle}</h4>
          <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{data.taskDescription}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <Badge variant="danger">Failed</Badge>
        <span className="text-xs font-semibold text-rose-600 bg-rose-50/50 border border-rose-100 rounded-lg px-2.5 py-1">
          Unsuccessful
        </span>
      </div>
    </Card>
  )
}

export default FailedTask