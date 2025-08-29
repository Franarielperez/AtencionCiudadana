import React, { useState } from 'react';

const Greeting: React.FC = () => {
  const [showBox, setShowBox] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setShowBox(true)}>Mostrar cuadro azul</button>
      {showBox && (
        <div
          className="mt-4 h-32 w-32 bg-blue-500"
          onClick={() => setShowBox(false)}
        />
      )}
      <p>Hacé click en el cuadro para cerrarlo.</p>
    </div>
  );
};

// interface GreetingProps {
//   name: string;
// }
// const Greeting: React.FC<GreetingProps> = ({ name }) => (
//   <button onClick={s}></button>
// );

// export default Greeting;
