import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import products from "../data/data";

const firebaseConfig = {
  apiKey: "AIzaSyC5oVAS_7bfPPtDIn4HvPeRUEHKbfKhXtk",
  authDomain: "tienda-omori.firebaseapp.com",
  projectId: "tienda-omori",
  storageBucket: "tienda-omori.appspot.com",
  messagingSenderId: "899787004528",
  appId: "1:899787004528:web:1cb9a3d32e7f9e6e3932b5",
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

///todos los productos

export default async function getItemsOrdered() {
  const collectionProductsRef = collection(DB, "products");
  const q = query(collectionProductsRef, orderBy("category"), limit(10));

  const documentSnapShot = await getDocs(q);

  const documentsData = documentSnapShot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

/// un solo producto
export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

///por categorias
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  return docOrder.id;
}

export async function exportArrayToFirebase() {
  const collectionRef = collection(DB, "products");

  for (let item of products) {
    item.index = item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    "documento creado id", docOrder.id;
  }
}
