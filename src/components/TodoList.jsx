import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div className="rounded-t-md bg-white [&>article]:p-4 mt-8">
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
      </div>
    )
}

export default TodoList;