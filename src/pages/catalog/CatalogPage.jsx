import { useEffect, useState } from "react";
import { getProdutos } from "../../services/productsServices";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProdutos()
      .then(setProdutos)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {produtos.map((produto) => (
        <div key={produto.id}>{produto.nome}</div>
      ))}
    </div>
  );
}