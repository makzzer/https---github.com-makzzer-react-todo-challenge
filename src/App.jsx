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
  { id: 1, title: "hola soy uno", completed: true },
  { id: 2, title: "hola soy dos", completed: false },
  { id: 3, title: "hola soy tres", completed: false },
  { id: 4, title: "hola soy cuatro", completed: false }
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente

    <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate />
        <TodoList todos={todos}/>
        <TodoComputed />
        <TodoFilter />
      </main>

      <Footer />
    </div>
  );
};

export default App;
