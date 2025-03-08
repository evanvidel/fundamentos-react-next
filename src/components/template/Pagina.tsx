import {
  IconCode,
  IconComponents,
  IconHome,
  IconSquare1,
} from '@tabler/icons-react';
import AreaLateral from './AreaLateral';
import Cabecalho from './Cabecalho';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Rodape from './Rodape';
import MenuLabel from './MenuLabel';

export interface PaginaProps {
  children: any;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Cabecalho />
      <div className="flex flex-1">
        <AreaLateral>
          <Menu>
            <MenuLabel>Componentes</MenuLabel>
            <MenuItem icone={IconHome} link="/" texto="Início" />
            <MenuItem
              icone={IconSquare1}
              link="/basico/primeiro"
              texto="Primeiro Componente"
            />
            <MenuItem
              icone={IconCode}
              link="/basico/jsx-01"
              texto="Entendendo o JSX #01"
            />
            <MenuItem
              icone={IconCode}
              link="/basico/jsx-02"
              texto="Entendendo o JSX #02"
            />
            <MenuItem
              icone={IconCode}
              link="/basico/jsx-03"
              texto="Entendendo o JSX #03"
            />
            <MenuItem
              icone={IconCode}
              link="/basico/jsx-04"
              texto="Entendendo o JSX #04"
            />
            <MenuItem
              icone={IconComponents}
              link="/basico/comp-01"
              texto="Componentes #01"
            />
            <MenuItem
              icone={IconComponents}
              link="/basico/comp-02"
              texto="Componentes #02"
            />
            <MenuLabel>Árvore de Componentes</MenuLabel>
          </Menu>
        </AreaLateral>

        <main className="p-6">{props.children}</main>
      </div>
      <Rodape />
    </div>
  );
}
