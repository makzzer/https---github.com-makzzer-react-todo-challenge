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
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="Crear una nueva tarea..." />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
       
       <div className="bg-white rounded-md px-4">
       <article>
          <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
          <p>Complete online JS Curse makzz</p>
          <button> <CrossIcon/> </button>
        </article>

        <article>
        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
          <p className="text-gray-600 ">Complete online JS Curse makzz</p>
          <button> <CrossIcon/> </button>
        </article>

        <article>
        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
          <p>Complete online JS Curse makzz</p>
          <button> <CrossIcon/> </button>
        </article>

       </div>


        <section>
          <span>5 items left</span>
          <button>Clear Completed</button>
        </section>

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