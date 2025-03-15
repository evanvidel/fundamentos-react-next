import CadastroUsuario from "@/components/arvore/crud/CadastroUsuario";
import Titulo from "@/components/template/Titulo";

export default function Cadastro() {
  return (
    <div>
      <Titulo
        principal="Cadastro de Usuário"
        secundario="Criação,alteração, consultas e exclusão de usuário"
      />
      <CadastroUsuario />
    </div>
  );
}
