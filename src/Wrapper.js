export default function Wrapper (props) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 h-[100vh] flex items-center justify-center">
      {props.children}
    </div>
  );
}