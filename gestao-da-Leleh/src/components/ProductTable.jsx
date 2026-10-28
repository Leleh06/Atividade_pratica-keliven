import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { categorias, categoriaIcones, isEstoqueBaixo } from "../data/products";

function ProductTable({ produtos }) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const filtrados = produtos.filter((p) => {
    const bateBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = categoria === "Todas" || p.categoria === categoria;
    return bateBusca && bateCategoria;
  });

  return (
    <section className="painel">
      <div className="tabela-topo">
        <div>
          <h3>Nossos produtos 💅</h3>
          <p className="painel-sub">{filtrados.length} item(ns) na lista</p>
        </div>
        <input
          type="text"
          placeholder="🔍 Buscar produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="filtros">
        {categorias.map((c) => (
          <button
            key={c}
            className={`filtro ${categoria === c ? "filtro-ativo" : ""}`}
            onClick={() => setCategoria(c)}
          >
            {categoriaIcones[c] ? `${categoriaIcones[c]} ` : "🎀 "}
            {c}
          </button>
        ))}
      </div>

      <div className="tabela-scroll">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Quantidade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((produto) => {
              const baixo = isEstoqueBaixo(produto);
              const nivel = Math.min((produto.quantidade / (produto.estoqueMinimo * 2)) * 100, 100);

              return (
                <tr key={produto.id} className={baixo ? "linha-baixa" : ""}>
                  <td>
                    <div className="produto">
                      <span className="produto-icone">{produto.icone}</span>
                      <span className="produto-nome">{produto.nome}</span>
                    </div>
                  </td>
                  <td>{produto.categoria}</td>
                  <td>
                    <div className="qtd">
                      <span>{produto.quantidade}</span>
                      <div className="qtd-trilho">
                        <div
                          className={`qtd-nivel ${baixo ? "qtd-baixo" : ""}`}
                          style={{ width: `${nivel}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <StatusBadge baixo={baixo} />
                  </td>
                </tr>
              );
            })}

            {filtrados.length === 0 && (
              <tr>
                <td colSpan="4" className="vazio">
                  Nenhum produto por aqui... 🥺 tenta outra busca!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductTable;