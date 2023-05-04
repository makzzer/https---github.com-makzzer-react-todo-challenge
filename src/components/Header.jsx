import { useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

//{/*Header (Componente) en vuejs recomiendan qe los componentes no sean de 1 palabra, en react si se podría*/}
const Header = () => {
  //para renderizar el modo oscuro necesito un estado, por eso lo inicio por default en falso
  const [darkMode, setDarkMode] = useState(false);

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
