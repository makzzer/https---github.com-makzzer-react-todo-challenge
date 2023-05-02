import TodoItem from "./TodoItem";

/*Acá le voy a pasar como prop los todos que inicie en el app.jsx y voy a recorrer esa lista de todos usando un todo al estilo que recorre el foreach*/ 

const TodoList = ({ todos, deleteTodo }) => {
  return (

    <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}

    </div>
  );
};

export default TodoList;
