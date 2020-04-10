import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();
const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { task: "read a book ", id: 1 },
    { task: "wash the car  ", id: 2 },
    { task: "start coding  ", id: 3 }
  ]);

  const [editItem, setEditItem] = useState(null);

  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Clear tasks
  const clearList = () => {
    setTasks([]);
  };

  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id);

    setEditItem(item);
  };

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));
    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
