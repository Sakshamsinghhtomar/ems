import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <Card title="Employee Tasks Directory" description="Real-time summary of workloads and progress across your team.">
      <div className="overflow-x-auto -mx-6 -my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/50">
              <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
              <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">New</th>
              <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Active</th>
              <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Completed</th>
              <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Failed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {userData.map((elem, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 font-bold text-indigo-700 text-xs">
                      {elem.firstName.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-semibold text-slate-900 text-sm">{elem.firstName}</span>
                  </div>
                </td>
                <td className="py-3.5 px-6 text-center">
                  <Badge variant="info" className="min-w-[2rem] justify-center">
                    {elem.taskCounts.newTask}
                  </Badge>
                </td>
                <td className="py-3.5 px-6 text-center">
                  <Badge variant="warning" className="min-w-[2rem] justify-center">
                    {elem.taskCounts.active}
                  </Badge>
                </td>
                <td className="py-3.5 px-6 text-center">
                  <Badge variant="success" className="min-w-[2rem] justify-center">
                    {elem.taskCounts.completed}
                  </Badge>
                </td>
                <td className="py-3.5 px-6 text-center">
                  <Badge variant="danger" className="min-w-[2rem] justify-center">
                    {elem.taskCounts.failed}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default AllTask