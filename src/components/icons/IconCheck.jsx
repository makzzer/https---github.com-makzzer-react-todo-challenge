//con el ({...props }) le paso el rest operator de los props
//dentro de las propiedades del SVG, ya podemos pasarles clases dinamicas


const IconCheck = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="9"
      fill="none"
      stroke="#FFF"
      strokeWidth="2"
    >
      <path d="M1 4.304L3.696 7l6-6" />
    </svg>
  );
};

export default IconCheck;
