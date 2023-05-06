import TodoItem from "./TodoItem";

/*Acá le voy a pasar como prop los todos que inicie en el app.jsx y voy a recorrer esa lista de todos usando un todo al estilo que recorre el foreach*/ 

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (

    <div className="mt-8 rounded-t-md overflow-hidden transition-all duration-1000 border-b-gray-800 dark:bg-gray-800 bg-white [&>article]:p-4">

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}

    </div>
  );
};

export default TodoList;
