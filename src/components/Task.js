import React, { useState } from "react";
import PropTypes from "prop-types";
import { TbEditCircle } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const Task = ({ task, toggleComplete, updateTask, deleteTask }) => {
  const [isExpanded, setextended] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, seteditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleview = (e) => {
    e.preventDefault();

    setextended(!isExpanded);
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };
  const handleEditChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    seteditedTask({ ...editedTask, [name]: value });
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTask(task.id, editedTask);
    setIsEditing(false);
  };
  const Toggleedit = (e) => {
    setIsEditing(!isEditing);
    setextended(!isExpanded);
  };
  return (
    <div className="main-task">
      <div className="task">
        <input
          className="checkboxinput"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <h3
          className={`task-title ${task.completed ? "completed" : ""}`}
          onClick={handleview}
        >
          {task.title}
        </h3>
        <div className="update">
          <TbEditCircle onClick={Toggleedit} />
          <MdDeleteOutline onClick={() => deleteTask(task.id)} />
        </div>
      </div>
      <div className="extendedData">
        {isExpanded && (
          <div className="task-details">
            {isEditing ? (
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  name="title"
                  className="edit-title"
                  value={editedTask.title}
                  onChange={handleEditChange}
                  placeholder="Task title"
                />
                <textarea
                  name="description"
                  className="edit-des"
                  value={editedTask.description}
                  onChange={handleEditChange}
                  placeholder="Task description"
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <p>
                  <strong>Description:</strong> {task.description}
                </p>
                <p>
                  <strong>Last Updated:</strong>{" "}
                  {formatDateTime(task.lastUpdated)}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
