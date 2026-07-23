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
        <div className="columns-2 gap-4 sm:columns-3 sm:gap-8 ...">
            {produtos.map((produto) => (
                <div>
                    <div key={produto.id}>{produto.nome}</div>
                </div>
            ))}
        </div>
    );
}
