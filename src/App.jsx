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
    const newArray = todos.filter(todo => todo.id != id)
    setTodos(newArray)
  };



  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente

    <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
        <TodoComputed todos={todos} />
        <TodoFilter />
      </main>

      <Footer />
    </div>
  );
};

export default App;
