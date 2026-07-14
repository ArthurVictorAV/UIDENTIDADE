import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-mono font-bold text-text">
          UIdentidade<span className="text-accent">{"</>"}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-text-muted">
          <Link to="/" className="hover:text-accent transition-colors">
            Catálogo
          </Link>
          <Link to="/carrinho" className="hover:text-accent transition-colors">
            Carrinho
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}