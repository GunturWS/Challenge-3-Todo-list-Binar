// TodoInput.js
import Proptypes from "prop-types";
const TodoInput = ({onSubmit, onChange, value}) => {

  return (
    <>
      <form className="mx-auto" onSubmit={onSubmit}>
        <div className="p-6 mx-auto bg-white rounded-xl border border-stone-300">
          <div className="">
            <h1 className="py-3 text-center text-4xl font-bold text-black">
              <span>Todo Input</span>
            </h1>

            <input
              type="text"
              value={value}
              onChange={onChange}
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
};
