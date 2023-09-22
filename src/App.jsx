import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchtodo from "./pages/Searchtodo";
import TodoInput from "./pages/TodoInput";
import data from "./Data/data.json";
import { useState, useEffect } from "react";
import Notfound from "./components/Notfound";

localStorage.setItem("Data", JSON.stringify(data));
const getLocalStorage = () => {
  let Data = localStorage.getItem("Data");
  if (Data) {
    return (Data = JSON.parse(localStorage.getItem("Data")));
  } else {
    return [];
  }
};

function App() {
  const [task, setTask] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(task));
  }, [task]);

  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Searchtodo task={task} />} />
        <Route path="/add-todo" index element={<TodoInput task={task} setTask={setTask} />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </Router>
  );
}

export default App;
