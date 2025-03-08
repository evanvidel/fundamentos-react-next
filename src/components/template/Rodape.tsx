import { IconHeartFilled } from '@tabler/icons-react';

export default function Rodape() {
  return (
    <footer
      className="flex justify-end items-center gap-1.5 text-sm
    border-t border-zinc-800 text-zinc-400 h-16 p-6"
    >
      <span>Feito com</span>
      <IconHeartFilled size={14} className="text-red-500" />
      <span>por Cod3r</span>
    </footer>
  );
}
