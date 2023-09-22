import { useState } from "react";
import Searchicon from "../components/Icon/Searchicon";
import Footer from "../components/TodoFooter";
import TodoList from "../components/TodoList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Searchtodo = ({ task }) => {
  const [editingItem, setEditingItem] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [todos, setTodos] = useState(task);

  const [show, setShow] = useState(todos);
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

  const searchAlgoritme = (tasks, query) => {
    // Menggunakan metode filter() untuk mencari tugas
    var hasilPencarian = tasks.filter(function (task) {
      // Menggunakan method includes() untuk mencocokkan kata kunci dengan task
      return task.task.toLowerCase().includes(query.toLowerCase());
    });

    return hasilPencarian;
  };

  const handleButtonSearch = (e) => {
    e.preventDefault();
    setShow(searchAlgoritme(todos, value));
  };
  const handleInputSearch = (e) => {
    setValue(e.target.value);
  };
  const handleAllTodo = () => {
    setShow(todos);
  };

  const handleDoneTodo = () => {
    setShow(filteredTodo(todos, "done"));
  };

  const handleToDo = () => {
    setShow(filteredTodo(todos, "todo"));
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus tugas ini?");

    if (confirmDelete) {
      const updatedTodos = todos.filter((item) => item.id !== id);
      setTodos(updatedTodos);
    }
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
    <>
      <form
        onSubmit={handleButtonSearch}
        className=" p-6 mx-auto bg-white rounded-xl  border border-stone-300 "
        action=""
      >
        <div className=" mt-4 p-6 mx-auto bg-white rounded-xl  border border-stone-300">
          <div className="">
            <h1 className="py-3 text-center text-4xl font-bold text-black">
              <span>TodosSearch</span>
            </h1>
            <div className="flex flex-row mt-4">
              <button>
                <Searchicon />
              </button>
              <input
                type="Search"
                value={value}
                onChange={handleInputSearch}
                className="flex: flex self-center w-1/2 px-4 bg-gray-50 p-2 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search Todos"
              />
            </div>
          </div>
          <div className="flex flex-justifycenter gap-40 flex-row">
            <button className="relative h-12 w-[54%] mt-4 bg-cyan-500 rounded-lg border justify-center">
              <span className="font-medium text-white">Search</span>
            </button>
            <Link
              to="/add-todo"
              className="relative h- w-1/4 mt-4 bg-cyan-500 rounded-lg border justify-center"
            >
              <span className="font-medium text-white">Add New Task</span>
            </Link>
          </div>
        </div>
        {/* input todolist component */}
        {/* <Todolist />  */}
        {/* input TodoList Pages */}
        {/* input Fotter component */}
      </form>
      <TodoList
        // handleInputChange={handleInputChange}
        // value={value}
        // handleSubmit={handleSubmit}

        handleDoneTodo={handleDoneTodo}
        handleAllTodo={handleAllTodo}
        handleToDo={handleToDo}
        show={show}
        editingItem={editingItem}
        editTask={editTask}
        setEditTask={setEditTask}
        toggleComplete={toggleComplete}
        handleSaveEdit={handleSaveEdit}
        editTodo={editTodo}
        handleDelete={handleDelete}
        handleDeleteAllTasks={handleDeleteAllTasks}
        handleDeleteDoneTasks={handleDeleteDoneTasks}
      />
      <Footer />
    </>
  );
};

export default Searchtodo;

Searchtodo.propTypes = {
  task: PropTypes.array.isRequired,
};
