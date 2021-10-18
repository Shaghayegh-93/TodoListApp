const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div key={todo.id} className="todo">
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>

        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
