import Input from "../Input/Input";

export default function Todo (props) {
  function data(event) {
    return props.onData(event);
  }

  return (
    <div className="pl-20 pt-10">
      <Input onValueData={data}  />
    </div>
  );
}