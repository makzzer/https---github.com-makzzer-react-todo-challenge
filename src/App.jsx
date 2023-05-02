import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import Footer from "./components/Footer";
import { useState } from "react";

//Creo el estado global que va a afectar a todos los otros componentes,
//los componentes hijos no pueden enviar props a los componentes padres por lo que los estados los van a estar gestionando
//mi componente principal que en este caso es App.jsx
//por lo que dentro de App.jsx voy a crear mi estado global--> osea mi estado inicial

const initialStateTodos = [
  { id: 1, title: "Hacer Curso de React", completed: true },
  { id: 2, title: "Hacer Curso de Next.Js", completed: false },
  { id: 3, title: "Hacer Curso de Bootstrap", completed: true },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  //metodo para crear el todo, recibe el titulo
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //metodo para eliminar el Todo, recibe el key entiendo
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id != id);
    setTodos(newArray);
  };

  

  {/**  LO SIGUIENTE ES MI UPDATE, LO VOY A CAMBIAR POR EL DE UDEMY Video 103 PORQUE NO PUEDO HACER !todo.completed
  const updateTodo = (id) => {

    const tareaAModificar = todos.find((todo) => todo.id === id);
   
    // Si no se encontró la tarea, no se hace nada y retorna
    if (!tareaAModificar) {
      return;
    }

    //modifica el estado de la tarea
    const tareaActualizada = { ...tareaAModificar, completed : !todo.completed };

    //hace una copia de la lista original
    const listaCopiada = [...todos];

    // Encuentra el índice de la tarea en el array original
    const taskIndex = todos.findIndex((todo) => todo.id === id);

    // Crea una nueva copia del array original de tareas
    const tareasActualizadas = [...todos];

    // Reemplaza la tarea modificada en la copia del array
    tareasActualizadas[taskIndex] = tareaActualizada;

    // Actualiza el estado con la copia actualizada del array
    setTodos(tareasActualizadas);


     */}


const updateTodo = (id) =>{
  setTodos(todos.map(
    todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
}



  

  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente

    <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed todos={todos} />
        <TodoFilter />
      </main>

      <Footer />
    </div>
  );
};

export default App;
