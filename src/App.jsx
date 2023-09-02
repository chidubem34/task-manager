import { useState } from 'react';
import './App.css'

function TaskManagementApp() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');
  const [newTaskList, setNewTaskList] = useState('')
  const [error, setError] = useState('');

  const handleTaskNameChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleTaskListChange = (event) => {
    setNewTaskList(event.target.value);
  }

  const handleTaskDueDateChange = (event) => {
    setNewTaskDueDate(event.target.value);
  };

  const addTask = () => {
    if (newTaskName.trim() !== '', newTaskDueDate.trim() !== '' && newTaskList.trim() !== '') {
      const newTask = {
        name: newTaskName,
        list: newTaskList,
        dueDate: newTaskDueDate
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
      setNewTaskList('');
      setNewTaskDueDate('');
      setError('');
    } else {
      setError(alert('please enter a task, instruction and due date'));
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <main>
        <div className="container">
          <h1>Task Management App</h1>
          <div className='form'>
            <div>
              <input type="text" value={newTaskName} onChange={handleTaskNameChange} placeholder="Enter task name"
              />
            </div>

            <div>
              <input type="text" value={newTaskList} onChange={handleTaskListChange} placeholder='Enter Task Instructions  here' />
            </div>

            <div>
              <input type="number" value={newTaskDueDate} onChange={handleTaskDueDateChange} placeholder="Enter due date" />
            </div>

            <div>
              <button onClick={addTask}>Add Task</button>
            </div>
          </div>
          <hr />
          {error && <p>{error}</p>}
          {tasks.length === 0 ? (
            <p className='no-task'>No tasks found!</p>
          ) : (
            <div>
              {tasks.map((task, index) => (
                <div key={index}>
                  <div className='task'>
                    <h2>{task.name.toUpperCase()}</h2>
                    <div>
                      <l>
                        <li>{task.list}</li>
                      </l>
                    </div>
                    <p><span className="material-symbols-outlined">clock_loader_40</span> Due in {task.dueDate} days</p>
                    <div className='btn'>
                      <button className='btn' onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default TaskManagementApp;