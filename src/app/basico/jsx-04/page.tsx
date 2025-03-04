export default function ExemploJSX04() {
  const listaDeAprovados = ['Rebeca', 'Guilherme', 'Maria', 'Thiago', 'Pedro'];

  // const spans = [];

  // for (let nome of listaDeAprovados) {
  //   spans.push(<span key={nome}>## {nome}</span>);
  // }

  return (
    <div className="container">
      <div className="exercicio">
        <h1> Entendendo o JSX #04</h1>
        <div className="conteudo">
          <div className="flex flex-col gap-3">
            {listaDeAprovados.map((nome) => {
              return (
                <div
                  key={nome}
                  className="flex justify-between bg-black p-3 rounded-md "
                >
                  <span className="text-red-500">{nome}</span>

                  <div className="flex gap-2">
                    <button className="bg-blue-500 p-2 text-sm rounded-md">
                      Editar
                    </button>
                    <button className="bg-red-500 p-2 text-sm rounded-md">
                      Excluir
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
