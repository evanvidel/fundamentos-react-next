export interface AprovadoProps{
    nome: string;
}

export default function Aprovado(props: AprovadoProps) {
 
  return (
    <div className="flex justify-between bg-black p-3 rounded-md ">
      <span className="text-zinc-500">
        {props.nome}
        </span>

      <div className="flex gap-2">
        <button className="bg-blue-500 p-2 text-sm rounded-md">Editar</button>
        <button className="bg-red-500 p-2 text-sm rounded-md">Excluir</button>
      </div>
    </div>
  );
}
