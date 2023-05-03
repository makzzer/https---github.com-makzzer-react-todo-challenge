const TodoComputed = ({ todos,limpiarTodosCompletados,computedElementsLeft} ) => {

  //desestructuro el todo


  //console.log(todos.length)
  //no se porque pero hace el conteo así
  console.log(todos.length);


  if (todos.length === 0) {
    return (
      <section className="text-left rounded-b-md bg-white py-4 px-4">
        <span className="text-gray-400 inline-block">No tasks Available Sir</span>
      </section>
    );

  } else {
    return (
      <section className="flex justify-between rounded-b-md bg-white py-4 px-4">
        <span className="text-gray-400">{computedElementsLeft} items left</span>
        <button onClick={limpiarTodosCompletados} className="text-gray-400">Clear Completed</button>
      </section>
    );
  }
};

export default TodoComputed;
