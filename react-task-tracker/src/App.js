import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:"Do Homework",
            day: "Feb 5th at 2:30pm",
            reminder:false               
        }
    ] 
 )

 const deleteTask = (id) =>{
   setTasks(tasks.filter( (task) =>task.id !==id ))
 }

 const toggleReminder = (id) =>{
   console.log(id)
 }

  return (
    <div className="container">
      <Header name='Nima' />
      {tasks.length >0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No More Tasks"}
    </div>
  );
}

export default App;
