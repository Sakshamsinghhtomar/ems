import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, updateTaskStatus }) => {
  if (!data.tasks || data.tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-100 rounded-xl border border-slate-200 border-dashed">
        <p className="text-sm text-slate-400 font-semibold">No tasks assigned yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} updateTaskStatus={updateTaskStatus} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} updateTaskStatus={updateTaskStatus} />
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} updateTaskStatus={updateTaskStatus} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} updateTaskStatus={updateTaskStatus} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList