import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h1>Memorizacion en react</h1>
      <hr />
      <h2>teoria</h2>
      <h3>memo</h3>
      <ul>
        <li>se encarga de memorizar un componente</li>
        <li>lo vuelve a memorizar al momento de que sus props cambian</li>
        <li>evita re-renderizados</li>
        <li>
          hay que evitarlo en la medida de lo posible, pues podria ser mas
          costosa la tarea de memorizacion que el re-renderizado del componente
        </li>
        <li>usalo, cuando: </li>
        <ul>
          <li>tenemos muchos elementos renderizados en una lista</li>
          <li>llamemos datos de apis</li>
          <li>un componente se vuelve muy pesado</li>
          <li>salen alertas de rendimiento en la consola</li>
        </ul>
      </ul>

      <h3>useCallback</h3>
      <ul>
        <li>memoriza una funcion, para no volverla a definir en cada render</li>
        <li>
          usalo siempre que se pase una funcion como prop a un componente
          memorizado
        </li>
        <li>
          usalo siempre que se pase una funcion como parametro de un efecto
        </li>
      </ul>

      <h3>useMemo</h3>
      <ul>
        <li>memoriza un valor calculado, es decir, el resultado de una funcion</li>
        <li>genera propiedades computadas</li>
        <li>usalo para procesos pesados</li>
      </ul>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
