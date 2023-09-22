import Searchicon from "../components/Icon/Searchicon";
import Footer from "../components/TodoFooter";
import TodoList from "./TodoList";

const Searchtodo = () => {
  return (
    <>
      <form className=" p-6 mx-auto bg-white rounded-xl  border border-stone-300 " action="">
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
                className="flex: flex self-center w-1/2 px-4 bg-gray-50 p-2 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search Todos"
              />
            </div>
          </div>
          <div className="flex flex-justifycenter gap-40 flex-row">
            <button className="relative h-12 w-[54%] mt-4 bg-cyan-500 rounded-lg border justify-center">
              <span className="font-medium text-white">Search</span>
            </button>
            <button className="relative h- w-1/4 mt-4 bg-cyan-500 rounded-lg border justify-center">
              <span className="font-medium text-white">Add New Task</span>
            </button>
          </div>
        </div>
        {/* input todolist component */}
        {/* <Todolist />  */}
        {/* input TodoList Pages */}
        {/* input Fotter component */}
      </form>
      <TodoList />
      <Footer />
    </>
  );
};

export default Searchtodo;
