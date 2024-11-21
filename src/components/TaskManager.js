import React, { useState } from "react";
import "./TaskManager.css";
import { FaPlus, FaStar, FaRegStar, FaTrash, FaRegCheckCircle } from "react-icons/fa";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false, important: false, notes: "notes" },
    { id: 2, text: "Finish project report", completed: false, important: false, notes: "notes" },
    { id: 3, text: "Call the bank", completed: false, important: false, notes: "notes" },
    { id: 4, text: "Schedule dentist appointment", completed: false, important: false, notes: "notes" },
    { id: 5, text: "Plan weekend trip", completed: false, important: false, notes: "notes" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  // Add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false, important: false, notes: "" },
      ]);
      setNewTask(""); // Clear the input
    }
  };

  // Open the new right sidebar and set the selected task
  const openRightSidebar = (task) => {
    setSelectedTask(task);
    setSidebarOpen(true);
  };

  return (
    <div className="task-manager">
      <div className="add-task-bar">
        <div className="icons-wrapper">
          <FaPlus className="icon" title="Add Task" onClick={addTask} />
          <FaStar className="icon" title="Mark Important" />
          <FaTrash className="icon" title="Clear Task" onClick={() => setNewTask("")} />
        </div>

        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>ADD TASK</button>
      </div>

      <ul className="task-list">
        {tasks.filter((task) => !task.completed).map((task) => (
          <li key={task.id} className="task-item" onClick={() => openRightSidebar(task)}>
            <div className="task-text">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span className={task.important ? "important" : ""}>{task.text}</span>
            </div>
            <FaRegStar
              className={`star-icon ${task.important ? "highlight" : ""}`}
              onClick={() => toggleImportant(task.id)}
              title="Mark as Important"
            />
          </li>
        ))}
      </ul>

      <h3>Completed</h3>
      <ul className="completed-list">
        {tasks.filter((task) => task.completed).map((task) => (
          <li key={task.id} className="task-item completed">
            <div className="task-text">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span>{task.text}</span>
            </div>
            <FaRegStar
              className={`star-icon ${task.important ? "highlight" : ""}`}
              onClick={() => toggleImportant(task.id)}
              title="Mark as Important"
            />
          </li>
        ))}
      </ul>

      {/* New Sidebar on the right */}
      {sidebarOpen && selectedTask && (
        <div className="right-sidebar">
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>X</button>
          <h2>{selectedTask.text}</h2>
          <div className="sidebar-options">
            <div className="option">
              <FaStar className="icon" onClick={() => toggleImportant(selectedTask.id)} />
              <span>{selectedTask.important ? "Mark as Unimportant" : "Mark as Important"}</span>
            </div>
            <div className="option">
              <FaRegCheckCircle className="icon" />
              <span>Add Step</span>
            </div>
            <div className="option">
              <FaRegCheckCircle className="icon" />
              <span>Set Reminder</span>
            </div>
            <div className="option">
              <FaRegCheckCircle className="icon" />
              <span>Add Due Date</span>
            </div>
            <div className="option">
              <FaRegCheckCircle className="icon" />
              <span>Repeat</span>
            </div>
            <div className="option">
              <textarea
                className="notes"
                placeholder="Add Notes"
                value={selectedTask.notes}
                onChange={(e) => setTasks(tasks.map(task => task.id === selectedTask.id ? { ...task, notes: e.target.value } : task))}
              />
            </div>
          </div>
          <div className="created-text">Created Today</div>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
