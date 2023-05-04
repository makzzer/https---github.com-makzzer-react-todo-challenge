import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

/* El TodoItem va a recibir como prop el Todo que sale de la recorrida del map del TodoList, cada uno de esos Todos que recorro en map es el prop que recibe el todoitemF */
/*para alinear el icono check de la task, puedo hacerlo con la clase grid e items-center o con flex justify-items-center y justify-center */

const TodoItem = ({ todo, deleteTodo,updateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-b-gray-400">
      
      <button
      onClick={()=>{updateTodo(id)}}
        className={`flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 border-gray-300 ${
          completed
            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
      >
        {/*acá en la linea siguiente pregunto si esta cmpletada devuelvo
         el icono sino no lo devuelvo, no le pongo el else resuelvo la condicion con el && */}
        {completed && <IconCheck />}
      </button>

      {/*cuando no hay un caso contrario en el operador ternario no uso ? y : --> solamente uso &&*/}
      <p className={`grow text-gray-600  dark:text-gray-400 ${completed && "line-through"}`}>
        {title}
      </p>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
        className="flex-none"
      >
        {" "}
        <IconCross />{" "}
      </button>
    </article>
  );
};
export default TodoItem;
