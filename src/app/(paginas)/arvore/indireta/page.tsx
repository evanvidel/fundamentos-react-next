import Pai from "@/components/arvore/indireta/Pai";
import Titulo from "@/components/template/Titulo";

export default function ComunicacaoIndireta() {
  return (
    <div>
      <Titulo
        principal="Comunicação indireta"
        secundario="Exemplo de comunicação indireta entre componentes"
      />
      <div className="flex flex-col py-7">
        <Pai />
      </div>
    </div>
  );
}
