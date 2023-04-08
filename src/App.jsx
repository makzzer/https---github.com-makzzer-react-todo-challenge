import Header from "./components/header";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";

const App = () => {
  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente


    <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-cover bg-no-repeat">



      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate />
        <TodoList />
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className=" container mx-auto mt-8 px-4 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
