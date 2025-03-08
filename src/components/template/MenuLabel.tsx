export interface MenuLabelprops {
  children?: any;
}

export default function MenuLabel(props: MenuLabelprops) {
  return (
    <span className="text-xs uppercase text-zinc-500 px-4 py-4">
      {props.children}
    </span>
  );
}
