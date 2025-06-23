import React, { useState } from "react";
import axios from "axios";

export function CadastroVenda() {
  const [cliente, setCliente] = useState({ nome: "", genero: "", idade: 0, escolaridade: "", renda: 0 });
  const [venda, setVenda] = useState({ produto_id: "", quantidade: 0, valor_total: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resCliente = await axios.post("http://localhost:5000/clientes", cliente);
    const cliente_id = resCliente.data.id || 1;
    await axios.post("http://localhost:5000/vendas", { ...venda, cliente_id });
    alert("Venda registrada!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Venda</h2>
      <input placeholder="Nome do Cliente" onChange={e => setCliente({ ...cliente, nome: e.target.value })} />
      <input placeholder="Gênero" onChange={e => setCliente({ ...cliente, genero: e.target.value })} />
      <input type="number" placeholder="Idade" onChange={e => setCliente({ ...cliente, idade: e.target.value })} />
      <input placeholder="Escolaridade" onChange={e => setCliente({ ...cliente, escolaridade: e.target.value })} />
      <input type="number" step="0.01" placeholder="Renda" onChange={e => setCliente({ ...cliente, renda: e.target.value })} />
      <input placeholder="ID do Produto" onChange={e => setVenda({ ...venda, produto_id: e.target.value })} />
      <input type="number" placeholder="Quantidade" onChange={e => setVenda({ ...venda, quantidade: e.target.value })} />
      <input type="number" step="0.01" placeholder="Valor Total" onChange={e => setVenda({ ...venda, valor_total: e.target.value })} />
      <button type="submit">Registrar Venda</button>
    </form>
  );
}
