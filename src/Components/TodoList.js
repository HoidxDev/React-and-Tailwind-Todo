export default function TodoList (props) {
  return (
    <div className="w-[36rem] h-[3rem] mt-10 ml-10 flex items-center rounded-lg bg-violet-500">
      <div className="w-[25rem] text-left ml-8 text-white"> 
        {props.Todo}
      </div>
      <button
        onClick={props.removeClick}
        type="button"
        className="w-[10rem] ml-12 rounded-r-lg bg-violet-700 text-white flex items-center h-full justify-center px-8 py-3 border border-transparent text-[12px] font-mediumhover:bg-indigo-200">
        Remove todo
      </button>
    </div>
  );
}