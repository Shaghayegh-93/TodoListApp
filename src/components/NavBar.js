import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unCompletedTodo, status, onChange }) => {
  if (!unCompletedTodo) return <h2>set your today todos</h2>;
  return (
    <header>
      <span>{unCompletedTodo}</span> <h2>are not completed</h2>
      <Select onChange={onChange} value={status} options={options} />
    </header>
  );
};

export default NavBar;
