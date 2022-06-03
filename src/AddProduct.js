import { useEffect, useState } from "react";
import "./App.css";

function HandleSubmit(event, fonctionretour) {
  event.preventDefault();
  console.log("name :", document.getElementById("produit").value);
  let produit = {
    name: document.getElementById("produit").value,
    description: document.getElementById("description").value,
    prix: document.getElementById("prix").value,
    image: document.getElementById("image").value,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produit),
  };
  fetch("http://localhost:3001/new-product", requestOptions)
    .then((res) => res.json())
    .then((res) => fonctionretour(res));
}

function AddProduct(props) {
  return (
    <form
      id="formulaire"
      onSubmit={(event) => HandleSubmit(event, props.fonctionretour)}
    >
      <br />

      <tr>
        <td>
          <label>
            Nom :
            <input type="text" id="produit" />
          </label>
        </td>
        <td>
          <label>
            Description :
            <input type="text" id="description" />
          </label>
        </td>
        <td>
          <label>
            Prix :
            <input type="text" id="prix" />
          </label>
        </td>
        <td>
          <label>
            URL Image :
            <input type="text" id="image" />
          </label>
        </td>
      </tr>

      <br />
      <input type="submit" value="Ajouter produit" />
    </form>
  );
}

export default AddProduct;
