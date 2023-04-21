import CrossIcon from "./icons/CrossIcon"

/* El TodoItem va a recibir como prop el Todo que sale de la recorrida del map del TodoList, cada uno de esos Todos que recorro en map es el prop que recibe el todoitemF */

const TodoItem = ({todo}) => {
    return (
        <article className="flex gap-4 border-b border-b-gray-800">
        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
        <p className="grow">{todo.title}</p>
        <button className="flex-none">
          {" "}
          <CrossIcon />{" "}
        </button>
      </article>
      
    )
}
export default TodoItem;