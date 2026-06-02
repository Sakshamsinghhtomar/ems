import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const parsedUserData = JSON.parse(loggedInUser)
      setUser(parsedUserData.role)
      setLoggedInUserData(parsedUserData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  const updateTaskStatus = (taskTitle, action) => {
    if (!loggedInUserData || !userData) return

    // Clone and update the array of all employees immutably
    const updatedUserData = userData.map((employee) => {
      if (employee.id === loggedInUserData.id) {
        // Find the task and update its properties
        const updatedTasks = employee.tasks.map((task) => {
          if (task.taskTitle === taskTitle) {
            const updatedTask = { ...task }
            if (action === 'accept' && task.newTask) {
              updatedTask.newTask = false
              updatedTask.active = true
            } else if (action === 'complete' && task.active) {
              updatedTask.active = false
              updatedTask.completed = true
            } else if (action === 'fail' && task.active) {
              updatedTask.active = false
              updatedTask.failed = true
            }
            return updatedTask
          }
          return task
        })

        // Recalculate task counts dynamically
        const taskCounts = { newTask: 0, active: 0, completed: 0, failed: 0 }
        updatedTasks.forEach((task) => {
          if (task.newTask) taskCounts.newTask++
          if (task.active) taskCounts.active++
          if (task.completed) taskCounts.completed++
          if (task.failed) taskCounts.failed++
        })

        const updatedEmployee = {
          ...employee,
          tasks: updatedTasks,
          taskCounts
        }

        // Update current logged-in employee state and storage
        setLoggedInUserData(updatedEmployee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))

        return updatedEmployee
      }
      return employee
    })

    // Update context state and save to local storage
    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedUserData))
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} updateTaskStatus={updateTaskStatus} /> : null) }
    </>
  )
}

export default App