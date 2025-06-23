import React, { useEffect, useState } from "react";
import axios from "axios";

export function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/produtos").then(res => setProdutos(res.data));
  }, []);

  return (
    <div>
      <h2>Estoque Atual</h2>
      <ul>
        {produtos.map(p => (
          <li key={p.id}>
            {p.nome} | {p.categoria} | {p.quantidade} unid | R$ {p.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
