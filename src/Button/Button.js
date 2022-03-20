export default function Button (props) {
    return (
      <button type="submit" onClick={props.Click}
        className=" py-[0.73rem]   px-6 border rounded-r-full border-transparent shadow-sm text-sm font-medium  
        text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
        {props.Description}
      </button>
    );
}