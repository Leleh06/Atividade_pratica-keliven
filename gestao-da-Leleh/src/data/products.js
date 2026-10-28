export const products = [
  { id: 1, icone: "💄", nome: "Batom Matte Rosé", categoria: "Lábios", quantidade: 24, estoqueMinimo: 10 },
  { id: 2, icone: "✨", nome: "Gloss Cristal", categoria: "Lábios", quantidade: 6, estoqueMinimo: 12 },
  { id: 3, icone: "👁️", nome: "Máscara de Cílios", categoria: "Olhos", quantidade: 18, estoqueMinimo: 8 },
  { id: 4, icone: "🎨", nome: "Paleta de Sombras", categoria: "Olhos", quantidade: 9, estoqueMinimo: 6 },
  { id: 5, icone: "🖋️", nome: "Delineador Líquido", categoria: "Olhos", quantidade: 3, estoqueMinimo: 10 },
  { id: 6, icone: "🧴", nome: "Base Líquida", categoria: "Rosto", quantidade: 15, estoqueMinimo: 8 },
  { id: 7, icone: "🌸", nome: "Blush Cremoso", categoria: "Rosto", quantidade: 4, estoqueMinimo: 8 },
  { id: 8, icone: "🪞", nome: "Pó Compacto", categoria: "Rosto", quantidade: 20, estoqueMinimo: 10 },
  { id: 9, icone: "🫧", nome: "Hidratante Facial", categoria: "Skincare", quantidade: 30, estoqueMinimo: 12 },
  { id: 10, icone: "☀️", nome: "Protetor Solar FPS 50", categoria: "Skincare", quantidade: 2, estoqueMinimo: 10 },
];

export const menuItems = [
  { id: "painel", rotulo: "Painel", icone: "🎀" },
  { id: "produtos", rotulo: "Produtos", icone: "💄" },
  { id: "movimentacoes", rotulo: "Movimentações", icone: "🛍️" },
  { id: "relatorios", rotulo: "Relatórios", icone: "📊" },
];

export const categorias = ["Todas", "Lábios", "Olhos", "Rosto", "Skincare"];

export const categoriaIcones = {
  Lábios: "💋",
  Olhos: "👁️",
  Rosto: "🌸",
  Skincare: "🫧",
};

export const isEstoqueBaixo = (produto) => produto.quantidade < produto.estoqueMinimo;