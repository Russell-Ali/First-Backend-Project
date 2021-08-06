import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Job Interview",
      day: "Saturday, June 27 2021",
      reminder: true,
    },
    {
      id: 2,
      text: "Job Interview Second",
      day: "Saturday, June 28 2021",
      reminder: false,
    },
    {
      id: 3,
      text: "Job Interview Third",
      day: "Saturday, June 29 2021",
      reminder: false,
    },
  ]);
  //Add Task
  const addTask = (task: any) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Tasks
  const deleteTask: any = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle Reminder
  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Add Tasks to show there"
      )}
    </div>
  );
};
export default App;
