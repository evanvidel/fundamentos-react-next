export default function ExemploJSX() {
  const titulo = <h1> Entendendo o JSX #01</h1>;
  return (
    <div className="container">
      <div className="exercicio">
        {titulo}
        <div className="conteudo">
          <span>{7 * 7}</span>
          <span>{Math.random()}</span>
          <span>Math.random()</span> {/*apenas texto */}
        </div>
      </div>
    </div>
  );
}
