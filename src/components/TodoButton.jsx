import PropTypes from 'prop-types'

const TodoButton = ({allTodo, doneTodo, toDo}) => {
  return (
    <div className="">
      <div className="">
        <h1 className="py-3 text-center text-4xl font-bold text-black">
          <span>Todo List</span>
        </h1>
      </div>
      <div className="flex flex-justifycenter gap-20">
        <button onClick={allTodo} className="relative h-12 w-full mt-4 bg-cyan-500 rounded-lg border justify-center">
          <span className="font-medium text-white">ALL</span>
          
        </button>
        <button onClick={doneTodo} className="relative h-12 w-full mt-4 bg-cyan-500 rounded-lg border justify-center">
          <span className="font-medium text-white">DONE</span>
        </button>
        <button onClick={toDo} className="relative h-12 w-full mt-4 bg-cyan-500 rounded-lg border justify-center">
          <span className="font-medium text-white">TODO</span>
        </button>
      </div>
    </div>
  );
};

export default TodoButton;

TodoButton.propTypes = {
  allTodo: PropTypes.func.isRequired,
  doneTodo: PropTypes.func.isRequired,
  toDo: PropTypes.func.isRequired,
}