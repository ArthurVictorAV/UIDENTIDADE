const mockProducts = [
  { id: 1, name: "Camisa ADS", course: "ADS", price: 45.0 },
  { id: 2, name: "Camisa Ciencias da Computacao", course: "Ciencias da Computacao", price: 50.0 },
];

export default function CatalogPage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Fardamento por curso</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockProducts.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-sm text-slate-500">{p.course}</p>
            <p className="mt-2 font-bold">R$ {p.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}