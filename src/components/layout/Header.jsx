import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Fardamento<span className="text-blue-400">Univ</span>
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link to="/">Catálogo</Link>
          <Link to="/carrinho">Carrinho</Link>
          <Link to="/login">Entrar</Link>
        </nav>
      </div>
    </header>
  );
}