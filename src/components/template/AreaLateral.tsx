export interface AreaLateralProps {
  children: any;
}

export default function AreaLateral(props: AreaLateralProps) {
  return (
    <aside className="p-6 w-80 border-r border-zinc-800 ">
      {props.children}
    </aside>
  );
}
