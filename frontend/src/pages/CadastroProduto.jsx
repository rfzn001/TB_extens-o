import React, { useState } from "react";
import axios from "axios";

export function CadastroProduto() {
  const [form, setForm] = useState({ nome: "", categoria: "", quantidade: 0, preco: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/produtos", form).then(() => {
      alert("Produto cadastrado!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Produto</h2>
      <input placeholder="Nome" onChange={e => setForm({ ...form, nome: e.target.value })} />
      <input placeholder="Categoria" onChange={e => setForm({ ...form, categoria: e.target.value })} />
      <input type="number" placeholder="Quantidade" onChange={e => setForm({ ...form, quantidade: e.target.value })} />
      <input type="number" step="0.01" placeholder="Preço" onChange={e => setForm({ ...form, preco: e.target.value })} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
