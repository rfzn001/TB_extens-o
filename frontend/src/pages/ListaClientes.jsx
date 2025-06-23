import React, { useEffect, useState } from "react";
import axios from "axios";

export function ListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/clientes").then(res => setClientes(res.data));
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>
            {c.nome} | {c.genero} | {c.idade} anos | {c.escolaridade} | R$ {c.renda}
          </li>
        ))}
      </ul>
    </div>
  );
}
