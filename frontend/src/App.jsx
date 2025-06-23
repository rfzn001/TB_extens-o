import React from "react";
import { CadastroProduto } from "./pages/CadastroProduto";
import { ListaProdutos } from "./pages/ListaProdutos";
import { CadastroVenda } from "./pages/CadastroVenda";
import { ListaClientes } from "./pages/ListaClientes";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Sistema de Controle de Estoque</h1>
      <CadastroProduto />
      <CadastroVenda />
      <ListaProdutos />
      <ListaClientes />
    </div>
  );
}

export default App;
