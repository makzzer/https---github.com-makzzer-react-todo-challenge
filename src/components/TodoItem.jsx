import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

/* El TodoItem va a recibir como prop el Todo que sale de la recorrida del map del TodoList, cada uno de esos Todos que recorro en map es el prop que recibe el todoitemF */

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-800">
      {/*  <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
          <IconCheck/>
    </button>*/}
      <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        <IconCheck />
      </button>
      <p className="grow">{title}</p>
      <button className="flex-none">
        {" "}
        <IconCross />{" "}
      </button>
    </article>
  );
};
export default TodoItem;
