const TodoFilter = ({ changeFilter, filtro }) => {
  //recibe el filtro porque es el String, es para que me muestre el hover activo depende el filtro que yo elija
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded bg-white p-4 dark:bg-gray-800 dark:text-gray-400">
        <button
          className={`${
            filtro === "all"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filtro === "active"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            filtro === "completed"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
