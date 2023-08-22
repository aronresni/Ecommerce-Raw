import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./config";

const productRef = collection(db, "products");

export const getProducts = async (categoria) => {
    const q = categoria
        ? query(productRef, where("categoria", "==", categoria))
        : productRef;
    const products = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });

    return products;
};



export const searchProduct = async () => {
    return new Promise((res) => {
        res([])
    })
}

export const getMovie = async (id) => {
    const document = doc(db, "products", id);
    const docSnap = await getDoc(document);
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
    return null;
}