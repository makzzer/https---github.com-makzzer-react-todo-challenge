import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente
   
   
   <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
   
   
   {/*Header (Componente) en vuejs recomiendan qe los componentes no sean de 1 palabra, en react si se podría*/}
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-green-400" />
          </button>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        {/* TODO Create */}
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            className="w-full px-4 py-4 text-gray-400 outline-none"
            type="text"
            placeholder="Crear una nueva tarea..."
          />
        </form>

        {/* TODO LIST (TodoItem) TODOUpdate y TODODelete */}
        <div className="rounded-t-md bg-white [&>article]:p-4 mt-8">
          <article className="flex gap-4 border-b border-b-gray-800">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow">Complete online JS Curse makzz</p>
            <button className="flex-none">
              {" "}
              <CrossIcon />{" "}
            </button>
          </article>

          <article className="flex gap-4  border-b border-b-gray-800">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow">Complete online JS Curse makzz</p>
            <button className="flex-none">
              {" "}
              <CrossIcon />{" "}
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-800">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow">Complete online JS Curse makzz</p>
            <button className="flex-none">
              {" "}
              <CrossIcon />{" "}
            </button>
          </article>
        </div>

        {/*TODO Computed-->Osea operaciones como contar los items restantes*/}
        <section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear Completed</button>
        </section>

        {/*TODO FILTER */}
        <section className="container mx-auto mt-8">
          <div className="flex justify-center gap-4 rounded bg-white p-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section>
      </main>

      <footer className=" container mx-auto mt-8 px-4 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
