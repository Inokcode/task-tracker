import React from "react";
import Task from "./Task";

// const tasks = [
//   {
//     id: 1,
//     text: "Text 1",
//     day: "2021",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Text 2",
//     day: "2022",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Text 3",
//     day: "2023",
//     reminder: false,
//   },
// ];

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //   const [tasks, setTasks] = useState([
  //     {
  //       id: 1,
  //       text: "Text 1",
  //       day: "2021",
  //       reminder: true,
  //     },
  //     {
  //       id: 2,
  //       text: "Text 2",
  //       day: "2022",
  //       reminder: true,
  //     },
  //     {
  //       id: 3,
  //       text: "Text 3",
  //       day: "2023",
  //       reminder: false,
  //     },
  //   ]);

  return (
    <>
      {tasks.map((task) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
