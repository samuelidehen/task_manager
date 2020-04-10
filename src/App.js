import React from "react";
import TaskListContextProvider from "./context/TaskListContext";
import "./App.css";
import TaskList from "./components/TaskList";
import Header from "./components/layout/Header";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
