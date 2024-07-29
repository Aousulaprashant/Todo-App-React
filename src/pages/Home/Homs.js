import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdModeNight } from "react-icons/md";
import Task from "../../components/Task";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import detectiveimg from "../../images/Detective-check-footprint 1.png";

const Homs = () => {
  const [tasks, settasks] = useState([]);
  const [showInputBox, setShowInputBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [darkmood, setmood] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [newtask, setnewtask] = useState({
    id: Number,
    title: "",
    description: "",
    lastUpdated: new Date().toString,
    completed: false,
  });

  useEffect(() => {
    fetch("/task.json")
      .then((response) => response.json())
      .then((data) => settasks(data))
      .catch((error) => console.error("Error fetching the tasks:", error));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("search") || "");
    setFilter(params.get("filter") || "All");
  }, [location.search]);

  const toggleComplete = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    navigate(`?search=${searchQuery}&filter=${value}`);
  };

  const handleinput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    navigate(`?search=${value}&filter=${filter}`);
  };

  const handlenewnotechange = (e) => {
    const { name, value } = e.target;
    setnewtask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddnote = (e) => {
    e.preventDefault();
    settasks((prevTasks) => [...prevTasks, newtask]);
    setnewtask({
      id: tasks.length + 2,
      title: "",
      description: "",
      lastUpdated: new Date().toString(),
      completed: false,
    });
    console.log(newtask);
    setShowInputBox(false);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter !== "All" && (filter === "Completed") !== task.completed) {
      return false;
    }
    if (
      searchQuery &&
      !task.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const updateTask = (id, updatedTask) => {
    settasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedTask, lastUpdated: new Date().toISOString() }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={`main-div ${darkmood ? "darkmood" : ""}`}>
      <h1>To Do App</h1>
      <div className="search-div">
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            value={searchQuery}
            placeholder="Search note.."
            onChange={handleinput}
          />
          <IoSearchSharp />
        </div>

        <select
          id="options"
          name="options"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <div className="toggle-mode">
          <MdModeNight onClick={() => setmood(!darkmood)} />
        </div>
      </div>
      <div>
        <div>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <div className="no-tasks">
              <img src={detectiveimg} />
              <p>No tasks found</p>
            </div>
          )}
        </div>
      </div>

      <div className="addicon">
        <IoMdAddCircle size={50} onClick={() => setShowInputBox(true)} />
      </div>
      {showInputBox && (
        <div className="input-box-overlay">
          <div className="input-box">
            <h4>NEW NOTE</h4>
            <form onSubmit={handleAddnote}>
              <input
                type="text"
                name="title"
                placeholder="Input your note..."
                onChange={handlenewnotechange}
              />
              <textarea
                placeholder="decription..."
                name="description"
                onChange={handlenewnotechange}
              />
              <div className="input-box-actions">
                <button
                  className="cancel-button"
                  onClick={() => setShowInputBox(false)}
                >
                  CANCEL
                </button>
                <button type="submit" className="apply-button">
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homs;
