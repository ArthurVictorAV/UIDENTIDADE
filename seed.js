// seed.js
import { readFileSync } from "fs";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = JSON.parse(
  readFileSync("./serviceAccountKey.json", "utf-8")
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const produtosMock = [
  {
    nome: "Camiseta Básica Branca",
    preco: 49.9,
    descricao: "Camiseta 100% algodão, corte reto, unissex.",
    categoria: "Vestuário",
    imagem: "https://picsum.photos/seed/camiseta/400/400",
    estoque: 25,
  },
  {
    nome: "Caneca de Cerâmica",
    preco: 29.9,
    descricao: "Caneca 300ml, ideal para café ou chá.",
    categoria: "Casa",
    imagem: "https://picsum.photos/seed/caneca/400/400",
    estoque: 40,
  },
  {
    nome: "Tênis Esportivo",
    preco: 199.9,
    descricao: "Tênis leve para corrida e caminhada.",
    categoria: "Calçados",
    imagem: "https://picsum.photos/seed/tenis/400/400",
    estoque: 12,
  },
  {
    nome: "Fone de Ouvido Bluetooth",
    preco: 89.9,
    descricao: "Fone sem fio com cancelamento de ruído básico.",
    categoria: "Eletrônicos",
    imagem: "https://picsum.photos/seed/fone/400/400",
    estoque: 30,
  },
  {
    nome: "Mochila Casual",
    preco: 119.9,
    descricao: "Mochila resistente à água, compartimento para notebook.",
    categoria: "Acessórios",
    imagem: "https://picsum.photos/seed/mochila/400/400",
    estoque: 18,
  },
  {
    nome: "Garrafa Térmica",
    preco: 59.9,
    descricao: "Garrafa térmica 500ml, mantém temperatura por 12h.",
    categoria: "Casa",
    imagem: "https://picsum.photos/seed/garrafa/400/400",
    estoque: 22,
  },
];

async function seed() {
  const batch = db.batch();
  produtosMock.forEach((produto) => {
    const ref = db.collection("produtos").doc();
    batch.set(ref, produto);
  });
  await batch.commit();
  console.log("Produtos inseridos com sucesso!");
}

seed();