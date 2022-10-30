import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, getDoc, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "skateshop-3cb1c.firebaseapp.com",
  projectId: "skateshop-3cb1c",
  storageBucket: "skateshop-3cb1c.appspot.com",
  messagingSenderId: "967540377766",
  appId: "1:967540377766:web:d68722906124506a400c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore();

const cargarDataBase = async () => {
      const promise = await fetch('./json/products.json')
      const productos = await promise.json()
      productos.forEach( async (producto) => {
        await addDoc(collection(database,"productos"), {
           nombre: producto.nombre,
           marca: producto.marca,
           precio: producto.precio,
           categoria: producto.idCategory,
           stock: producto.stock,
           img: producto.img
        })
      })
}

const getProduct = async (id) => {
  const producto = await getDoc(doc(database, "productos", id))
  const prod = [producto.id, producto.data()]
  return prod
}

const getProducts = async () => {
  const productos = await getDocs(collection(database, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

export {cargarDataBase, getProduct, getProducts};