import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
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

export const getProductById = async (productId) => {
    const docRef = doc(productRef, productId);

    try {
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
            const productData = docSnapshot.data();
            return { ...productData, id: docSnapshot.id };
        } else {
            throw new Error("Producto no encontrado");
        }
    } catch (error) {
        throw new Error("Error al obtener el producto por ID: " + error.message);
    }
};