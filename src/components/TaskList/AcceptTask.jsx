import React from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const AcceptTask = ({ data, updateTaskStatus }) => {
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
      <div className="mt-6 border-t border-slate-100 pt-4 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="warning">Active</Badge>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => updateTaskStatus(data.taskTitle, 'complete')}
            size="sm"
            variant="success"
            className="flex-1"
          >
            Complete
          </Button>
          <Button
            onClick={() => updateTaskStatus(data.taskTitle, 'fail')}
            size="sm"
            variant="danger"
            className="flex-1"
          >
            Fail
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default AcceptTask