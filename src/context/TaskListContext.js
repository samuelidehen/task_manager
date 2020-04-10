import React, { createContext, useState } from "react";

export const TaskListContext = createContext();
const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { task: "read a book ", id: 1 },
    { task: "wash the car  ", id: 2 },
    { task: "start coding  ", id: 3 }
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
