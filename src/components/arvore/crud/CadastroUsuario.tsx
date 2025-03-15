"use client"
import { useState } from "react";
import todosOsUsuarios from "../../../data/constants/usuarios";
import Usuario from "@/data/model/Usuario";
import ListaUsuarios from "./ListaUsuarios";

export default function CadastroUsuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>(todosOsUsuarios);
  return (
    <div>
      <ListaUsuarios usuarios={usuarios}/>
    </div>
  );
}
