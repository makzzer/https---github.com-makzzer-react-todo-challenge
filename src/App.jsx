import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

//Creo el estado global que va a afectar a todos los otros componentes,
//los componentes hijos no pueden enviar props a los componentes padres por lo que los estados los van a estar gestionando
//mi componente principal que en este caso es App.jsx
//por lo que dentro de App.jsx voy a crear mi estado global--> osea mi estado inicial

/*
const listaTodosDefault = [
  { id: 1, title: "Hacer Curso de React", completed: true },
  { id: 2, title: "Hacer Curso de Next.Js", completed: false },
  { id: 3, title: "Hacer Curso de Bootstrap", completed: true },
];
*/

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  //use effect para el local storage, cuando haya un cambio en los todos, actualizar el localStorage
  useEffect(() => {
    localStorage.todos = JSON.stringify(todos);
  }, [todos]);


  //Creo otro state para los filtros
  const [filtro, setFiltro] = useState("all");

  //tema filtro explicado en el video 105
  const filtrarTodos = () => {
    switch (filtro) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => todo.completed != true);
      case "completed":
        return todos.filter((todo) => todo.completed != false);
      default:
        return todos;
    }
  };

  const changeFilter = (filtro) => setFiltro(filtro);

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

  const limpiarTodosCompletados = () => {
    const arraySinCompletados = todos.filter((todo) => todo.completed != true);
    setTodos(arraySinCompletados);
  };

  //metodo para contar los elementos computados osea los elementos que faltan sin completar

  const computedElementsLeft = todos.filter(
    (todo) => todo.completed != true
  ).length;

  {
    /**  LO SIGUIENTE ES MI UPDATE, LO VOY A CAMBIAR POR EL DE UDEMY Video 103 PORQUE NO PUEDO HACER !todo.completed
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


     */
  }

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente

    <div className="min-h-screen
    bg-gray-300
    bg-[url('./assets/images/bgMobileLight.jpg')]
     transition-all
      duration-1000
      
        
         bg-contain 
          md:bg-[url('./assets/images/bg-desktop-light.jpg')]
            bg-no-repeat
             dark:bg-gray-900
              md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
               dark:bg-[url('./assets/images/bgMobileDark.jpg')]
                dark:text-gray-400">


      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filtrarTodos()}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed
          todos={todos}
          limpiarTodosCompletados={limpiarTodosCompletados}
          computedElementsLeft={computedElementsLeft}
        />
        <TodoFilter changeFilter={changeFilter} filtro={filtro} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
