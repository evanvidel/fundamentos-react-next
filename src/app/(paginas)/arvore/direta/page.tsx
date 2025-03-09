import Pai from '@/components/arvore/direta/Pai';
import Titulo from '@/components/template/Titulo';

export default function ComunicacaoDireta() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Comunicação direta"
        secundario="Exemplo de comunicação direta entre componentes"
      />
      <Pai nome="joão" sobrenome="Silva" filhos={['Maria', 'Pedro', 'Lucas']} />
    </div>
  );
}
