import CrossIcon from "./icons/CrossIcon"

const TodoList = () => {
    return (
        <div className="rounded-t-md bg-white [&>article]:p-4 mt-8">
        <article className="flex gap-4 border-b border-b-gray-800">
          <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
          <p className="grow">Complete online JS Curse makzz</p>
          <button className="flex-none">
            {" "}
            <CrossIcon />{" "}
          </button>
        </article>

        <article className="flex gap-4  border-b border-b-gray-800">
          <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
          <p className="grow">Complete online JS Curse makzz</p>
          <button className="flex-none">
            {" "}
            <CrossIcon />{" "}
          </button>
        </article>

        <article className="flex gap-4 border-b border-b-gray-800">
          <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
          <p className="grow">Complete online JS Curse makzz</p>
          <button className="flex-none">
            {" "}
            <CrossIcon />{" "}
          </button>
        </article>
      </div>
    )
}

export default TodoList;