import { useState } from 'react'
import "./App.scss"
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TasksList from './components/TasksList';
import TasksListDone from './components/TasksListDone';
import EmptyState from './components/EmptyState';

function App() {

  const [tasksData, setTasksData] = useState([
    {
        "id": "1",
        "text": "Your first task",
        "highPriority": true,
        "done": false
    }
  ]);


  const addTask = task => {
    const id = Math.floor(Math.random() * 1000) + 1
    const done = false
    const newTask = { id, done, ...task }
    setTasksData([...tasksData, newTask])
  }

  const deleteTask = (id) => {
    setTasksData(tasksData.filter(task => task.id !== id))
  }

  const toggleTaskStatus = id => {
    setTasksData(tasksData.map(task => (
      task.id === id ? {...task, done: !task.done} : task
    )))
    console.log("Done", tasksData)
  }

  return (
    <div className="App">
      <Header title="MyTrack"/>
      <AddTaskForm onAdd={addTask}/>
      {tasksData.length > 0 ? <TasksList tasksData={tasksData} onDelete={deleteTask} taskStatus={toggleTaskStatus} /> : <EmptyState />}
      {tasksData.length > 0 ? <TasksListDone tasksData={tasksData} onDelete={deleteTask} taskStatus={toggleTaskStatus} /> : null}
    </div>
  );
}

export default App;
