import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

//{/*Header (Componente) en vuejs recomiendan qe los componentes no sean de 1 palabra, en react si se podría*/}
const Header = () => {
  //para renderizar el modo oscuro necesito un estado, por eso lo inicio por default en falso que significa que esa el modo light
  const [darkMode, setDarkMode] = useState(false);

  //lo primero es el codigo que se va a ejecutar con el use effect 
  //y entre [] va el parametro al que debe estar atento al cambio, 
  //en este caso el cambio de true y false del boton luna y sol
  useEffect(()=>{
    darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  },[darkMode])

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
