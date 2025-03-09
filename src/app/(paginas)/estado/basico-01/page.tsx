
import Contador from '@/components/estado/Contador';
import Titulo from '@/components/template/Titulo';

export default function EstadoBasico01() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Gerenciamento de Estado"
        secundario="Exemplo de gerenciamento de estado com React"
      />
      <div className="flex gap-10">
      <Contador valorIncial={1000}/>
      <Contador valorIncial={10000}/>
      <Contador valorIncial={-550}/>
      </div>
      
    </div>
  );
}
