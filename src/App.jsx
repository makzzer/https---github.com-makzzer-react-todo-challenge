const App = () => {
  return (
    //el fragment es porque no podemos tener elementos sueltos sino que tenemos que devolver un unico elemento en el componente
    <div className="bg-[url('./images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">

      <header className="container mx-auto px-4">
        <h1 className="uppercase">Todo</h1>
        <button>Luna</button>
        <form action="">
          <input type="text" placeholder="Crear una nueva tarea..." />
        </form>
      </header>

      <main className="container mx-auto px-4">
        <article>
          <button>Circulo</button>
          <p>Complete online JS Curse makzz</p>
          <button>Exit</button>
        </article>

        <article>
          <button>Circulo</button>
          <p>Complete online JS Curse makzz</p>
          <button>Exit</button>
        </article>

        <article>
          <button>Circulo</button>
          <p>Complete online JS Curse makzz</p>
          <button>Exit</button>
        </article>



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