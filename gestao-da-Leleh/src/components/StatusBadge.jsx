function StatusBadge({ baixo }) {
  return (
    <span className={`badge ${baixo ? "badge-baixo" : "badge-ok"}`}>
      {baixo ? "💔 Estoque baixo" : "💖 Em estoque"}
    </span>
  );
}

export default StatusBadge;