import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

//acá voy a definir el estado inicial en lo que esté en localStorage, si viene dark lo dejo en dark por mas que presione F5,
//esto es para que repete las preferencias de visualizacion del usuario aunque actualice el sitio web
//el metodo ya devuelve un booleano


const initialStateDarkMode = sessionStorage.theme === "dark";
console.log(sessionStorage.theme)




//{/*Header (Componente) en vuejs recomiendan qe los componentes no sean de 1 palabra, en react si se podría*/}
const Header = () => {
  //para renderizar el modo oscuro necesito un estado, por eso lo inicio por default en falso que significa que esa el modo light
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  //lo primero es el codigo que se va a ejecutar con el use effect 
  //y entre [] va el parametro al que debe estar atento al cambio, 
  //en este caso el cambio de true y false del boton luna y sol
  useEffect(() => {
    if (darkMode) {

      document.documentElement.classList.add("dark")
      //para persistir el tema segun la preferencia del usuario incluso cuando actualicé, guardo theme=light o theme=dark, en localStorage
      sessionStorage.theme = 'dark'
      localStorage.theme = 'dark'
      //console.log(sessionStorage.getItem('theme'))
      //console.log("estoy en true")
      //console.log(darkMode)

    } else {
      document.documentElement.classList.remove("dark");
      //se puede hacer de esta otra manera tambien
      sessionStorage.setItem('theme', 'light')
      localStorage.theme = 'light'
      //console.log(sessionStorage.getItem('theme'))
      //console.log("estoy en false")
      //console.log(darkMode)
    }
    console.log(darkMode)

  }, [darkMode])

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
