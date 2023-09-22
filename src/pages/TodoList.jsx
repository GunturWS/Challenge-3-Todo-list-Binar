import { useState } from "react";
import Deleteicon from "../components/Icon/Deleteicon";
import Editicon from "../components/Icon/Editicon";
import data from "../Data/data.json";
import TodoButton from "../components/TodoButton";
import TodoInput from "../components/TodoInput";
// import TodoInput from "../components/Todoinput";

const TodoList = () => {
  const [editingItem, setEditingItem] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [todos, setTodos] = useState(data);
  const [value, setValue] = useState("");

  const filteredTodo = (todos, show) => {
    return todos.filter((todo) => {
      if (show === "done") {
        return todo.complete === true;
      } else if (show === "todo") {
        return todo.complete === false;
      }
    });
  };

  const handleAllTodo = () => {
    setTodos(data);
  };

  const handleDoneTodo = () => {
    setTodos(filteredTodo(data, "done"));
  };

  const handleToDo = () => {
    setTodos(filteredTodo(data, "todo"));
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus tugas ini?");

    if (confirmDelete) {
      const updatedTodos = todos.filter((item) => item.id !== id);
      setTodos(updatedTodos);
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: newTodo,
        complete: false,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };

  const toggleComplete = (itemId) => {
    const itemIndex = todos.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const updatedTodos = [...todos];

      updatedTodos[itemIndex].complete = !updatedTodos[itemIndex].complete;

      setTodos(updatedTodos);
    }
  };

  const editTodo = (index) => {
    const newText = prompt("Edit todo:", todos[index - 1].task);
    if (newText !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index - 1].task = newText;
      setTodos(updatedTodos);
      console.log(`Data item diubah menjadi: "${newText}"`);
    }
  };

  const handleSaveEdit = () => {
    const taskIndex = todos.findIndex((item) => item.id === editingItem);

    if (taskIndex !== -1) {
      const updatedTodos = [...todos];

      updatedTodos[taskIndex].task = editTask;

      setEditingItem(null);
      setEditTask("");

      setTodos(updatedTodos);
    }
  };

  const handleDeleteAllTasks = () => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus semua tugas?");

    if (confirmDelete) {
      setTodos([]);
    }
  };

  const handleDeleteDoneTasks = () => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus tugas yang telah di tandai?"
    );

    if (confirmDelete) {
      const incompleteTasks = todos.filter((item) => !item.complete);
      setTodos(incompleteTasks);
    }
  };

  return (
    <div className="mt-4 py-3">
      <TodoInput onChange={handleInputChange} value={value} onSubmit={handleSubmit} />
      <TodoButton doneTodo={handleDoneTodo} allTodo={handleAllTodo} toDo={handleToDo} />
      <ul className="">
        {todos.map((item) => (
          <li key={item.id} className={`todo-item ${item.complete ? "completed" : ""}`}>
            <div>
              <div className="mt-2.5 flex w-full items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow">
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                ) : (
                  <span
                    className="font-medium"
                    style={
                      item.complete
                        ? { textDecoration: "line-through", color: "red", fontSize: "1.5em" }
                        : {}
                    }
                  >
                    {item.task}
                  </span>
                )}
                <div className="flex gap-4">
                  <input
                    className="w-8"
                    type="checkbox"
                    onChange={() => toggleComplete(item.id)}
                    checked={item.complete}
                  />
                  <span style={item.complete ? { textDecoration: "line-through" } : {}}>
                    {" "}
                    {item.data} {item.data}
                  </span>

                  {editingItem === item.id ? (
                    <button onClick={handleSaveEdit}>Simpan</button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        editTodo(item.id);
                      }}
                    >
                      <Editicon />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    <Deleteicon />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 py-3">
        <ul>
          <li>
            <div className="flex flex-justifycenter gap-20">
              <button
                className="relative h-12 w-full mt-4 bg-red-600 rounded-lg border justify-center"
                onClick={handleDeleteDoneTasks}
                type="button"
              >
                <span className="font-medium text-white">Delete Done Tasks</span>
              </button>
              <button
                className="relative h-12 w-full mt-4 bg-red-600 rounded-lg border justify-center"
                onClick={handleDeleteAllTasks}
                type="button"
              >
                <span className="font-medium text-white">Delete All Tasks</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
