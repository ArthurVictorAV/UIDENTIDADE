import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function getProdutos() {
  const snapshot = await getDocs(collection(db, "produtos"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}