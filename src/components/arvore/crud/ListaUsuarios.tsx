import Usuario from "@/data/model/Usuario";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ListaUsuariosProps {
  usuarios: Usuario[];
}

export default function ListaUsuarios(props: ListaUsuariosProps) {
  function renderizarUsuario(usuario: Usuario) {
    return (
      <div className="flex items-center px-6 py-3 rounded-mdbg-zinc-900">
        <div className="flex-1 flex flex-col">
          <span className="font-semibold">{usuario.nome}</span>
          <span className="text-sm text-zinc-400">{usuario.email}</span>
        </div>
        <div className="flex gap-2">
          <button className="botao azul">
            <IconEdit />
          </button>
        </div>
        <div>
          <button className="botao vermelho">
            <IconTrash />
          </button>
        </div>
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-2">
      {props.usuarios.map((usuario) => {
        return <li key={usuario.id}>{renderizarUsuario(usuario)}</li>;
      })}
    </ul>
  );
}
