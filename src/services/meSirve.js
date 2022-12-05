export async function exportArrayToFirebase() {
  const collectionRef = collection(DB, "products");

  for (let item of products) {
    item.index = item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    console.log("documento creado id", docOrder.id);
  }
}
