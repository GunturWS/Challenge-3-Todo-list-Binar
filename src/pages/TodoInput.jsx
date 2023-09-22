import { useState } from "react";
import Proptypes from "prop-types";

const TodoInput = ({ task, setTask }) => {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (newTodo) => {
    setTask([
      ...task,
      {
        id: task.length + 1,
        task: newTodo,
        complete: false,
      },
    ]);
  };

  const handleSubmit = (e) => {
    const confirmDelete = window.confirm("Kamu berhasil menginput data baru :)");

    if (confirmDelete) e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <form className="mx-auto" onSubmit={handleSubmit}>
        <div className="p-6 mx-auto bg-white rounded-xl border border-stone-300">
          <div className="">
            <h1 className="py-3 text-center text-4xl font-bold text-black">
              <span>Todo Input</span>
            </h1>

            <input
              type="text"
              value={value}
              onChange={handleInputChange}
              className="self-center w-full mt-4 px-4 bg-gray-50 p-2 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Input/Edit Todo"
            />

            <button
              type="submit"
              className="relative h-9 w-full mt-4 bg-cyan-500 rounded-lg border justify-center"
            >
              <span className="font-medium text-white">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoInput;

TodoInput.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
  task: Proptypes.any.isRequired,
  setTask: Proptypes.func.isRequired,
};
