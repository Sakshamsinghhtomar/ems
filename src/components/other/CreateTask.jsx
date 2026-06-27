import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Card from '../ui/Card'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import Select from '../ui/Select'
import Button from '../ui/Button'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const taskObj = { 
      taskTitle, 
      taskDescription, 
      taskDate, 
      category, 
      active: false, 
      newTask: true, 
      failed: false, 
      completed: false 
    }

    const updatedData = userData.map((elem) => {
      if (elem.firstName.toLowerCase() === asignTo.trim().toLowerCase()) {
        return {
          ...elem,
          tasks: [...elem.tasks, taskObj],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }
      return elem
    })

    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  const employeeOptions = userData 
    ? userData.map((emp) => ({ value: emp.firstName, label: emp.firstName }))
    : []

  return (
    <Card title="Create New Task" description="Assign a new task to an employee.">
      <form onSubmit={submitHandler} className="space-y-4">
        <Input
          id="taskTitle"
          type="text"
          label="Task Title"
          required
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="e.g. Redesign landing page"
        />

        <Input
          id="taskDate"
          type="date"
          label="Due Date"
          required
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />

        <Select
          id="asignTo"
          label="Assign To"
          required
          value={asignTo}
          onChange={(e) => setAsignTo(e.target.value)}
          placeholder="Select employee"
          options={employeeOptions}
        />

        <Input
          id="category"
          type="text"
          label="Category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Design, Dev, Marketing"
        />

        <TextArea
          id="taskDescription"
          label="Description"
          required
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Provide details on the goals and deliverables..."
          rows={4}
        />

        <Button type="submit" variant="primary" className="w-full justify-center">
          Create Task
        </Button>
      </form>
    </Card>
  )
}

export default CreateTask