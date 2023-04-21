import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  /*antes que nada tengo que crear un state, que representaria el nuevo todo que voy a agregar digamos*/
  /*Por lo que siempre va a arrancar vacio porque el todo no existe y lo voy a crear de vacio */
  /*Lo relaciono llamando al Value en el input y pasandole el title con el onChange*/
  /*Para reiniciar el formulario necesito el value={title}*/
  /*El onChange va a estar viendo cuando presione el click en el input*/

  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    /*La siguiente linea es para que el input no pueda ser un string vacío*/
    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title)
    setTitle("");
    console.log(title);
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full px-4 py-4 text-gray-400 outline-none"
        type="text"
        placeholder="Crear una nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
