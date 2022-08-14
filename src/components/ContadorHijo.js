import { memo, useMemo } from "react";

export default memo(function ContadorHijo({ contador, sumar, restar }) {
  //   let superNumero = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     superNumero++;
  //   }
  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);

  console.log("ContadorHijo se renderiza");
  return (
    <div>
      <h2>contador hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
});
