import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // on load run fetch tasks
  useEffect(()=>{
    // gets tasks from server using fetch task method
    const getTasks = async() =>{
      // defines all tasks in server in var tasksFromServer
      const tasksFromServer = await fetchTasks()
      // uses states to set tasks to that var
      setTasks(tasksFromServer)
    }
    // run method
    getTasks()
  }, [])

  // run http request
  const fetchTasks = async()=>{
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  const fetchTask = async(id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

 const addTask =async (task)=>{
   const res = await fetch('http://localhost:5000/tasks',
   {
     method:"POST",
     headers:{
       'Content-type':'application/json'
     },
     body: JSON.stringify(task)
   })
   const data = await res.json()

   setTasks([...tasks,data])

  //  const id =Math.floor(Math.random() * 10000) + 1
  //  const newTask = {id,...task}
  //  setTasks([...tasks,newTask])

 }

 const deleteTask = async (id) =>{
   await fetch(`http://localhost:5000/tasks/${id }`,{
     method:'DELETE'
   })

   setTasks(tasks.filter( (task) =>task.id !==id ))
 }

 const toggleReminder = async (id) =>{
   const task = await fetchTask(id)
   const updateTask =  {...task,reminder: !task.reminder}

   const res = await fetch(`http://localhost:5000/tasks/${id}`,{
     method: "PUT",
     headers:{
       'Content-type': 'application/json'
     },
     body: JSON.stringify(updateTask)
   })

   const data = await res.json()

   setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
 }

  return (
    <div className="container">
      <Header name='Nima' onAdd={()=> setshowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No More Tasks"}
    </div>
  );
}

export default App;
