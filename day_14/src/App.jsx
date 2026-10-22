
import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(-1)

  // CREATE
  function addTask() {
    if (task.trim() === '') {
      alert('Enter a task')
      return
    }

    if (editIndex === -1) {
      setTasks([...tasks, task.trim()])
    } else {
      const updatedTasks = [...tasks]
      updatedTasks[editIndex] = task.trim()
      setTasks(updatedTasks)
      setEditIndex(-1)
    }

    setTask('')
  }

  // UPDATE
  function editTask(index) {
    setTask(tasks[index])
    setEditIndex(index)
  }

  // DELETE
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))

    if (editIndex === index) {
      setTask('')
      setEditIndex(-1)
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1)
    }
  }

  // READ
  return (
    <div className="container">
      <h1>ToDo List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          {editIndex === -1 ? 'ADD' : 'UPDATE'}
        </button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <button className="edit" onClick={() => editTask(index)}>
              Edit
            </button>

            <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
