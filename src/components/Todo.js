const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div key={todo.id} className="todo">
      <div
        onClick={onComplete}
        className={`TodoText ${todo.isCompleted ? "completed" : ""}`}
      >
        {todo.text}
      </div>
      <div>
        <button className="btn" onClick={onEdit}>
          Edit
        </button>

        <button className="btn remove" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
