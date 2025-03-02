export default function ExemploJSX02() {
  function rendrizarCirculo(texto: string) {
    return (
      <div
        className="flex justify-center items-center 
    h-12 w-12 rounded-full bg-red-500 text-sm"
      >
        {texto}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="exercicio">
        <h1> Entendendo o JSX #02</h1>
        <div className="conteudo">
          <div className="grid grid-cols-3 gap-5">
          {rendrizarCirculo('#01')}
          {rendrizarCirculo('#02')}
          {rendrizarCirculo('#03')}
          {rendrizarCirculo('#03')}
          {rendrizarCirculo('#03')}
          {rendrizarCirculo('#03')}
          {rendrizarCirculo('#03')}
          </div>
        </div>
      </div>
    </div>
  );
}
