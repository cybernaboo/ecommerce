import { useEffect, useState } from "react";
import "./App.css";
import Produit from "./ProductPreview";
import AddProduct from "./AddProduct";

function ProductList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/get_products", {method: 'GET', credentials: 'include'})
      .then((res) => res.json())
      .then((jsondata) => {
        setProducts(jsondata);
      });
  }, []);

  let produits = products.map((p) => {
    return (
      <Produit
        key={p.name}
        name={p.name}
        description={p.description}
        prix={p.prix}
        image={p.image}
      />
    );
  });
  return (
    <div>
      {produits}
      <AddProduct fonctionretour={setProducts}/>
    </div>
  );
}

export default ProductList;
