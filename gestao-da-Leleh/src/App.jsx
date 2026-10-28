import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import ProductTable from "./components/ProductTable";
import { products, menuItems, categoriaIcones, isEstoqueBaixo } from "./data/products";

function App() {
  const [menuAtivo, setMenuAtivo] = useState("painel");

  // números dos cards
  const total = products.length;
  const baixo = products.filter(isEstoqueBaixo).length;
  const emEstoque = total - baixo;
  const unidades = products.reduce((soma, p) => soma + p.quantidade, 0);

  // gráfico: soma de unidades por categoria
  const totaisPorCategoria = products.reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + p.quantidade;
    return acc;
  }, {});
  const listaCategorias = Object.entries(totaisPorCategoria).sort((a, b) => b[1] - a[1]);
  const maior = listaCategorias[0][1];

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-marca">💋</div>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${menuAtivo === item.id ? "ativo" : ""}`}
              onClick={() => setMenuAtivo(item.id)}
            >
              <span className="menu-icone">{item.icone}</span>
              <span className="menu-rotulo">{item.rotulo}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="conteudo">
        <Header
          nomeSistema="Glow Stock"
          subtitulo="Seu estoque de make sempre lindo e organizado 💕"
        />

        <section className="cards">
          <StatCard
            titulo="Total de Produtos"
            valor={total}
            detalhe={`${unidades} unidades na prateleira`}
            icone="💄"
            variante="rosa"
          />
          <StatCard
            titulo="Produtos em Estoque"
            valor={emEstoque}
            detalhe="Tudo certinho por aqui"
            icone="💖"
            variante="ok"
          />
          <StatCard
            titulo="Estoque Baixo"
            valor={baixo}
            detalhe="Hora de repor, miga!"
            icone="🚨"
            variante="alerta"
          />
        </section>

        <section className="painel">
          <h3>Unidades por categoria 🛍️</h3>
          <p className="painel-sub">Quanto tem de cada coisinha no estoque</p>

          <div className="hbarras">
            {listaCategorias.map(([nome, totalCategoria]) => (
              <div key={nome} className="hbarra">
                <div className="hbarra-info">
                  <span>
                    {categoriaIcones[nome]} {nome}
                  </span>
                  <strong>{totalCategoria}</strong>
                </div>
                <div className="hbarra-trilho">
                  <div
                    className="hbarra-preenchimento"
                    style={{ width: `${(totalCategoria / maior) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProductTable produtos={products} />
      </main>
    </div>
  );
}

export default App;