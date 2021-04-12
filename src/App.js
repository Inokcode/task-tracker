// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Text 1",
      day: "2021",
      reminder: true,
    },
    {
      id: 2,
      text: "Text 2",
      day: "2022",
      reminder: true,
    },
    {
      id: 3,
      text: "Text 3",
      day: "2023",
      reminder: false,
    },
  ]);

  const AddTask = () => {};

  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="GBU ALL" />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
