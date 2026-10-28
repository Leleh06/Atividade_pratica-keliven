function Header({ nomeSistema, subtitulo }) {
  const hoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="header">
      <div>
        <h1>
          {nomeSistema} <span className="header-brilho">✨</span>
        </h1>
        <p>{subtitulo}</p>
      </div>
      <span className="header-data">🎀 {hoje}</span>
    </header>
  );
}

export default Header;