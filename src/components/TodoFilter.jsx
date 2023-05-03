const TodoFilter = ({todos,filtrarActives,filtrarCompleted,filtrarAll}) => {
    return (
        <section className="container mx-auto mt-8">
        <div className="flex justify-center gap-4 rounded bg-white p-4">
          <button className="text-blue-600" onClick={filtrarAll}>All</button>
          <button className="hover:text-blue-600" onClick={filtrarActives}>Active</button>
          <button className="hover:text-blue-600" onClick={filtrarCompleted}>Completed</button>
        </div>
      </section>
    )
}

export default TodoFilter;