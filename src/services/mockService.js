/* -------------- BACK-END -------------- */
import products from "../data/data";

function getItems(categoryId) {
  return new Promise((resolve) => {
    if (categoryId === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      setTimeout(() => {
        let itemRequested = products.filter(
          (item) => item.category === categoryId
        );

        resolve(itemRequested);
      });
    }
  });
}

export function getSingleItem(id) {
  return new Promise((resolve, reject) => {
    let itemRequested = products.find((item) => item.id === Number(id));

    if (itemRequested === undefined) reject("Item no encontrado");

    setTimeout(() => {
      resolve(itemRequested);
    }, 2000);
  });
}

export default getItems;
