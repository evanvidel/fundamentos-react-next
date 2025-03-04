import Cabecalho from "./Cabecalho"

export interface PaginaProps{
    children: any
}

export default function Pagina(props: PaginaProps) {
  return (
    <div>
        <Cabecalho />
        <span>Pagina</span>
        <span>{props.children}</span>
    </div>
  )
}