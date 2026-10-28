function StatCard({ titulo, valor, detalhe, icone, variante }) {
  return (
    <article className={`stat-card stat-${variante}`}>
      <div className="stat-icone">{icone}</div>
      <div className="stat-texto">
        <p>{titulo}</p>
        <h2>{valor}</h2>
        <small>{detalhe}</small>
      </div>
    </article>
  );
}

export default StatCard;