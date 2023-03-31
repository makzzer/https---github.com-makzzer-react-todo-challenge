import CrossIcon from "./components/icons/CrossIcon"

const App = () => {
  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente
    <div className="bg-[url('./images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <header className="container mx-auto px-4 pt-8">

        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>Luna</button>
        </div>

        <form className="bg-white rounded-md overflow-hidden px-4 flex gap-4 items-center mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className="px-4 py-4 w-full text-gray-400 outline-none" type="text" placeholder="Crear una nueva tarea..." />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">

        <div className="bg-white rounded-md [&>article]:p-4">

          <article className="flex gap-4 border-b-gray-800 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="grow">Complete online JS Curse makzz</p>
            <button className="flex-none"> <CrossIcon /> </button>
          </article>

          <article className="flex gap-4  border-b-gray-800 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="grow">Complete online JS Curse makzz</p>
            <button className="flex-none"> <CrossIcon /> </button>
          </article>

          <article className="flex gap-4 border-b-gray-800 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="grow">Complete online JS Curse makzz</p>
            <button className="flex-none"> <CrossIcon /> </button>
          </article>


          <section className="py-4 px-4 justify-between flex">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>

        </div>
      </main>

      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <section className=" text-center container mx-auto px-4">
        Drag and drop to reorder list
      </section>

    </div>

  )
}

export default App;