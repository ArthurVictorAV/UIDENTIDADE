import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

export async function registrar({ nome, email, senha }) {
  const credencial = await createUserWithEmailAndPassword(auth, email, senha);
  const user = credencial.user;

  await updateProfile(user, { displayName: nome });

  await setDoc(doc(db, "usuarios", user.uid), {
    nome,
    email,
    criadoEm: new Date().toISOString(),
  });

  return user;
}

export async function login({ email, senha }) {
  const credencial = await signInWithEmailAndPassword(auth, email, senha);
  return credencial.user;
}

export async function logout() {
  await signOut(auth);
}