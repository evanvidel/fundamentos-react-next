export default function PrimeiroComponente() {
  return (
    <div className="flex flex-col gap-3 p-8">
      <div>
        <h1 className="text-3xl font-black">Primeiro Componente</h1>
        <p className="text-sm text-zinc-400">Subtitulo da nossa pagina</p>
      </div>
      <div>
        <span>Conteudo</span>
      </div>
      <button
        className="
           botao vermelho
           "
      >
        Salvar
      </button>
    </div>
  );
}
