import Deleteicon from "./Icon/Deleteicon";
import Editicon from "./Icon/Editicon";
import PropTypes from "prop-types";
import TodoButton from "./TodoButton";
// import TodoInput from "../pages/TodoInput";
// import TodoInput from "../components/Todoinput";

const TodoList = ({
  // handleInputChange,
  // value,
  // handleSubmit,
  
  handleDoneTodo,
  handleAllTodo,
  handleToDo,
  show,
  editingItem,
  editTask,
  setEditTask,
  toggleComplete,
  handleSaveEdit,
  editTodo,
  handleDelete,
  handleDeleteAllTasks,
  handleDeleteDoneTasks,
}) => {
  return (
    <div className="mt-4 py-3">
      {/* <TodoInput onChange={handleInputChange} value={value} onSubmit={handleSubmit} /> */}
      <TodoButton doneTodo={handleDoneTodo} allTodo={handleAllTodo} toDo={handleToDo} />
      <ul className="">
        {show.map((item) => (
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

TodoList.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  handleDoneTodo: PropTypes.func.isRequired,
  handleAllTodo: PropTypes.func.isRequired,
  handleToDo: PropTypes.func.isRequired,
  show: PropTypes.array.isRequired,
  editingItem: PropTypes.any.isRequired,
  editTask: PropTypes.string.isRequired,
  setEditTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDeleteAllTasks: PropTypes.func.isRequired,
  handleDeleteDoneTasks: PropTypes.func.isRequired,

};
