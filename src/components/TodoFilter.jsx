const TodoFilter = ({changeFilter}) => {
    return (
        <section className="container mx-auto mt-8">
        <div className="flex justify-center gap-4 rounded bg-white p-4">
          <button className="text-blue-600" onClick={()=> changeFilter("all")} >All</button>
          <button className="hover:text-blue-600" onClick={()=> changeFilter("active")}>Active</button>
          <button className="hover:text-blue-600" onClick={()=> changeFilter("completed")}>Completed</button>
        </div>
      </section>
    )
}

export default TodoFilter;